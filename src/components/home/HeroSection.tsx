"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { CloudBackground } from "./CloudBackground";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center">
      <CloudBackground />
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              {t("trust")}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-accent leading-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-accent-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                {t("ctaPrimary")}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                {t("ctaSecondary")}
              </Link>
            </div>
            <p className="text-sm text-text-muted">{t("availability")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
