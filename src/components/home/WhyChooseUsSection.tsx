"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Clock,
  Zap,
  Users,
  FileCheck,
  Truck,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  availability: Clock,
  response: Zap,
  team: Users,
  documentation: FileCheck,
  vehicles: Truck,
  approach: HeartHandshake,
};

const keys = [
  "availability",
  "response",
  "team",
  "documentation",
  "vehicles",
  "approach",
];

export function WhyChooseUsSection() {
  const t = useTranslations("home.whyChooseUs");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keys.map((key, index) => {
            const Icon = iconMap[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-cream flex items-center justify-center shrink-0">
                  {Icon && <Icon className="w-6 h-6 text-accent" />}
                </div>
                <div>
                  <h3 className="text-lg font-display text-accent mb-2">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
