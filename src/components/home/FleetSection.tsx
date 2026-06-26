"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function FleetSection() {
  const t = useTranslations("home.fleet");

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              {t("subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-accent mb-4">
              {t("title")}
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              {t("description")}
            </p>
            <Link
              href="/vozni-park"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
          >
            <Image
              src="/images/fleet/hearse-1.jpg"
              alt="Modern funeral hearse in our fleet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="eager"
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
