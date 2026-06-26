"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/SectionHeader";

const steps = ["1", "2", "3", "4"];

export function ProcessStepsSection() {
  const t = useTranslations("home.processSteps");

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-display mb-4">
                {step}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-14 w-full h-px bg-border" />
              )}
              <h3 className="text-xl font-display text-accent mb-2">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {t(`steps.${step}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
