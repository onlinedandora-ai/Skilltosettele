/**
 * Razorpay Payment Gateway Integration Utility for SkilltoSettle
 */

export interface RazorpayPaymentSuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface RazorpayOptions {
  key?: string;
  amount: number; // in smallest currency unit (e.g. Paise for INR: 100 paise = 1 INR)
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
    backdrop_color?: string;
  };
  handler?: (response: RazorpayPaymentSuccessResponse) => void;
  modal?: {
    ondismiss?: () => void;
    escape?: boolean;
    backdropclose?: boolean;
  };
}

/**
 * Loads the Razorpay Checkout SDK dynamically into the page head.
 */
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.getElementById("razorpay-checkout-script");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-checkout-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      console.error("Failed to load Razorpay Checkout SDK.");
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

/**
 * Gets the configured Razorpay Key ID from environment variables or standard test key.
 */
export const getRazorpayKey = (): string => {
  const envKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (envKey && !envKey.includes("YourKey") && envKey.trim().length > 5) {
    return envKey.trim();
  }
  return "rzp_live_TechSgrLhwSWOe";
};

/**
 * Launches the official Razorpay Checkout modal
 */
export const launchRazorpayCheckout = async (
  options: Omit<RazorpayOptions, "key"> & { key?: string }
): Promise<boolean> => {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded || !window.Razorpay) {
    alert(
      "Unable to initialize Razorpay payment gateway. Please check your internet connection or try again."
    );
    return false;
  }

  const razorpayKey = options.key || getRazorpayKey();

  const finalOptions: RazorpayOptions = {
    key: razorpayKey,
    name: "SkilltoSettle",
    description: options.description || "Live Cohort Program Enrollment",
    image: options.image || "https://skilltosettle.com/sts-logo.svg",
    amount: options.amount,
    currency: options.currency || "INR",
    prefill: options.prefill || {},
    notes: {
      platform: "SkilltoSettle.com",
      ...(options.notes || {}),
    },
    theme: {
      color: "#009bb9",
      backdrop_color: "rgba(15, 23, 42, 0.7)",
      ...(options.theme || {}),
    },
    handler: options.handler,
    modal: {
      ondismiss: options.modal?.ondismiss,
      escape: true,
      backdropclose: false,
    },
  };

  try {
    const rzp = new window.Razorpay(finalOptions);
    rzp.on("payment.failed", (response: any) => {
      console.error("Razorpay Payment Failed:", response.error);
      alert(
        `Payment Failed: ${response.error?.description || "Transaction could not be processed. Please try another payment method."}`
      );
    });
    rzp.open();
    return true;
  } catch (err) {
    console.error("Error opening Razorpay checkout:", err);
    return false;
  }
};
