"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";

const cards = [
  { slug: "international", icon: "Globe", href: "/medjunarodni-prevoz-pokojnika" },
  { slug: "europe", icon: "Plane", href: "/medjunarodni-prevoz-pokojnika" },
  { slug: "documentation", icon: "FileText", href: "/dokumentacija-i-administracija" },
  { slug: "equipment", icon: "Heart", href: "/usluge" },
];

export function ServiceCardsSection() {
  const t = useTranslations("home.serviceCards");

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                slug={card.slug}
                namespace="home.serviceCards.items"
                href={card.href}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
