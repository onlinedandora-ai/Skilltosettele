import React from "react";
import styles from "./WhatsAppButton.module.css";
import { CONTACT_CONFIG, getWhatsAppUrl } from "@/utils/constants";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = CONTACT_CONFIG.whatsappNumber,
  message = "Hi! I would like to inquire about 100% placement assistance and batch timings for India & USA.",
}: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppUrl(message, phoneNumber);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Chat with India & USA Admissions Desk on WhatsApp"
    >
      <span className={styles.tooltip}>100% Placement Assistance • India &amp; USA</span>
      <div className={styles.iconWrapper}>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.134.301-.351.452-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.076-.15-.678-1.636-.93-2.241-.244-.589-.493-.509-.678-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.08 2.912 1.23 3.113c.15.2 2.126 3.246 5.15 4.553.72.31 1.282.495 1.72.634.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.126-.276-.201-.577-.351z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.434 5.176L2.05 21.65a.75.75 0 00.923.923l4.474-1.384A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-8.5 10c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.47 8.47 0 01-4.322-1.18.75.75 0 00-.59-.074l-3.328 1.029 1.03-3.328a.75.75 0 00-.074-.59A8.47 8.47 0 013.5 12z"
          />
        </svg>
      </div>
      <span className={styles.pulseRing}></span>
    </a>
  );
}
