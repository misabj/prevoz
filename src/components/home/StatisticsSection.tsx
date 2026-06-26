"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const keys = ["availability", "experience", "countries", "transports"];

export function StatisticsSection() {
  const t = useTranslations("home.statistics");

  return (
    <section className="py-8 bg-accent text-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {keys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-display text-gold mb-2">
                {t(`items.${key}.value`)}
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wider">
                {t(`items.${key}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
