export const siteConfig = {
  companyName: "[NAZIV FIRME]",
  phonePrimary: "+381 XX XXX XXXX",
  phoneSecondary: "+49 XXX XXXXXXX",
  email: "info@firma.rs",
  address: "Beograd, Srbija",
  workingHours: "24/7",
  whatsappNumber: "+381XXXXXXXXX",
  youtubeChannelUrl: "https://www.youtube.com/@firma",
  facebookUrl: "https://www.facebook.com/firma",
  instagramUrl: "https://www.instagram.com/firma",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1234567890123!2d20.456!3d44.7866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ3JzExLjgiTiAyMMKwMjcnMjEuNiJF!5e0!3m2!1sen!2srs!4v1234567890123!5m2!1sen!2srs",
} as const;

export type SiteConfig = typeof siteConfig;
