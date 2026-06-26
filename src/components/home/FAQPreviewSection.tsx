"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { faqItems } from "@/data/faq";

export function FAQPreviewSection() {
  const t = useTranslations("home.faqPreview");
  const tFaq = useTranslations("faq.items");

  const items = faqItems.map((item) => ({
    question: tFaq(`${item.id}.question`),
    answer: tFaq(`${item.id}.answer`),
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
