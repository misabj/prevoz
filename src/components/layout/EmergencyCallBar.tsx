import { getTranslations } from "next-intl/server";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export async function EmergencyCallBar() {
  const t = await getTranslations("emergencyBar");

  return (
    <div className="bg-accent text-white text-xs sm:text-sm py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <span className="font-medium">{t("available")}</span>
          <a
            href={`tel:${siteConfig.phonePrimary}`}
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Phone size={14} />
            {siteConfig.phonePrimary}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <MessageCircle size={14} />
            {t("whatsapp")}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Mail size={14} />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
