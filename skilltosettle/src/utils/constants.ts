/**
 * Central contact and configuration constants for SkilltoSettle
 */

export const CONTACT_CONFIG = {
  // WhatsApp redirect number: +1 832-936-7679
  whatsappNumber: "18329367679",
  whatsappDisplay: "+1 832-936-7679",
  phoneDisplay: "+1 832-936-7679",
  phoneTel: "+18329367679",
  indiaPhone: "+91 7842832727",
  indiaPhoneTel: "+917842832727",
  usaPhone: "+1 832-936-7679",
  usaPhoneTel: "+18329367679",
  email: "admissions@skilltosettle.com",
  supportEmail: "support@skilltosettle.com",
  infoEmail: "info@skilltosettle.com",
  usaHQ: "6464 Savoy Dr, Suite 777, Houston, TX 77036",
  usaCity: "Houston, TX, USA",
  indiaDesk: "Hyderabad & Bangalore, India",
  placementAssistance: "100% Placement Assistance",
  defaultWhatsAppMessage: "Hi! I want to know more about 100% placement assistance and live courses for India & USA at SkilltoSettle.",
};

export function getWhatsAppUrl(customMessage?: string, phoneNumber?: string): string {
  const number = phoneNumber ? phoneNumber.replace(/[^0-9]/g, "") : CONTACT_CONFIG.whatsappNumber;
  const message = customMessage || CONTACT_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
