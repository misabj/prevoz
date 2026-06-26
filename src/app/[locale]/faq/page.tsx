import { getTranslations } from "next-intl/server";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { faqItems } from "@/data/faq";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("faq.title"),
    description: t("faq.description"),
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("faq");
  const items = faqItems.map((item) => ({
    question: t(`items.${item.id}.question`),
    answer: t(`items.${item.id}.answer`),
  }));

  return (
    <>
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-display text-accent mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-foreground/80">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-center text-foreground/80 mb-10">
            {t("description")}
          </p>
          <FAQAccordion items={items} defaultOpenIndex={null} />
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
