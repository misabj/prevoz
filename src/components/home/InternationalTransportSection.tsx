"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function InternationalTransportSection() {
  const t = useTranslations("home.internationalTransport");
  const countries = t.raw("countries") as string[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/hero/europe-1.jpg"
              alt="European city representing international transport coverage"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              {t("subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-accent mb-4">
              {t("title")}
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {t("description")}
            </p>
            <ul className="space-y-3 mb-8">
              {countries.map((country, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  {country}
                </li>
              ))}
            </ul>
            <Link
              href="/medjunarodni-prevoz-pokojnika"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
