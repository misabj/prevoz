"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

export function ContactCTASection() {
  const t = useTranslations("home.contactCTA");
  const tEmergency = useTranslations("emergencyBar");

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display text-accent mb-4">
          {t("title")}
        </h2>
        <p className="text-foreground/80 mb-10">{t("subtitle")}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phonePrimary}`}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-accent-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phonePrimary}
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-accent border border-accent px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {tEmergency("whatsapp")}
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-accent border border-accent px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            {tEmergency("email")}
          </Link>
        </div>
      </div>
    </section>
  );
}
