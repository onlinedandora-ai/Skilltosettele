import React, { createContext, useContext, useState, useEffect } from "react";

export interface CurrencyInfo {
  code: string;
  symbol: string;
  name: string;
  rateFromInr: number; // 1 INR = rateFromInr Target Currency
  decimals: number;
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyInfo> = {
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    rateFromInr: 1,
    decimals: 0,
  },
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    rateFromInr: 1 / 86.5,
    decimals: 0,
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    rateFromInr: 1 / 94.5,
    decimals: 0,
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    rateFromInr: 1 / 111.0,
    decimals: 0,
  },
  AED: {
    code: "AED",
    symbol: "AED ",
    name: "UAE Dirham",
    rateFromInr: 1 / 23.55,
    decimals: 0,
  },
  CAD: {
    code: "CAD",
    symbol: "CA$ ",
    name: "Canadian Dollar",
    rateFromInr: 1 / 61.5,
    decimals: 0,
  },
  AUD: {
    code: "AUD",
    symbol: "AU$ ",
    name: "Australian Dollar",
    rateFromInr: 1 / 56.0,
    decimals: 0,
  },
  SGD: {
    code: "SGD",
    symbol: "SG$ ",
    name: "Singapore Dollar",
    rateFromInr: 1 / 64.5,
    decimals: 0,
  },
};

/**
 * Detect user's currency based on time zone and locale
 */
export function detectLocationCurrency(): string {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const locale = (navigator.language || "").toLowerCase();

    // Check India
    if (
      timeZone.includes("Kolkata") ||
      timeZone.includes("Calcutta") ||
      timeZone.includes("India") ||
      locale.includes("-in") ||
      locale.startsWith("hi") ||
      locale.startsWith("te") ||
      locale.startsWith("ta") ||
      locale.startsWith("mr") ||
      locale.startsWith("bn")
    ) {
      return "INR";
    }

    // Check UAE / Gulf
    if (timeZone.includes("Dubai") || timeZone.includes("Muscat") || timeZone.includes("Riyadh") || timeZone.includes("Qatar")) {
      return "AED";
    }

    // Check UK
    if (timeZone.includes("London") || locale === "en-gb") {
      return "GBP";
    }

    // Check Canada
    if (timeZone.includes("Toronto") || timeZone.includes("Vancouver") || timeZone.includes("Montreal") || locale === "en-ca") {
      return "CAD";
    }

    // Check Australia
    if (timeZone.includes("Australia") || timeZone.includes("Sydney") || timeZone.includes("Melbourne") || locale === "en-au") {
      return "AUD";
    }

    // Check Singapore
    if (timeZone.includes("Singapore") || locale === "en-sg") {
      return "SGD";
    }

    // Check Europe
    if (timeZone.startsWith("Europe/")) {
      return "EUR";
    }

    // Check Americas
    if (timeZone.startsWith("America/")) {
      return "USD";
    }

    // Default to USD for global users, or INR if within South Asia
    return "INR";
  } catch {
    return "INR";
  }
}

interface CurrencyContextType {
  currency: string;
  currencyInfo: CurrencyInfo;
  setCurrency: (code: string) => void;
  formatPrice: (amountInInr: number, options?: { showCode?: boolean; roundToNice?: boolean }) => string;
  convertPrice: (amountInInr: number) => number;
  availableCurrencies: CurrencyInfo[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<string>(() => {
    const saved = localStorage.getItem("skillsettle-currency");
    if (saved && SUPPORTED_CURRENCIES[saved]) {
      return saved;
    }
    return detectLocationCurrency();
  });

  useEffect(() => {
    // Also try lightweight async IP lookup if user hasn't explicitly set a preference
    const saved = localStorage.getItem("skillsettle-currency");
    if (!saved) {
      const detected = detectLocationCurrency();
      setCurrencyState(detected);
    }
  }, []);

  const setCurrency = (code: string) => {
    if (SUPPORTED_CURRENCIES[code]) {
      setCurrencyState(code);
      localStorage.setItem("skillsettle-currency", code);
    }
  };

  const currencyInfo = SUPPORTED_CURRENCIES[currency] || SUPPORTED_CURRENCIES.INR;

  const convertPrice = (amountInInr: number): number => {
    if (currency === "INR") return amountInInr;
    const rawConverted = amountInInr * currencyInfo.rateFromInr;
    // Round to whole numbers for neat display
    return Math.round(rawConverted);
  };

  const formatPrice = (
    amountInInr: number,
    options: { showCode?: boolean; roundToNice?: boolean } = {}
  ): string => {
    const converted = convertPrice(amountInInr);
    const formattedNumber = converted.toLocaleString();
    const prefix = currencyInfo.symbol;
    const codeSuffix = options.showCode ? ` ${currencyInfo.code}` : "";
    return `${prefix}${formattedNumber}${codeSuffix}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencyInfo,
        setCurrency,
        formatPrice,
        convertPrice,
        availableCurrencies: Object.values(SUPPORTED_CURRENCIES),
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
