import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("services.title"),
    description: t("services.description"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("services");

  return (
    <>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
          <p className="text-center text-foreground/80 max-w-3xl mx-auto mb-12">
            {t("description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} slug={service.slug} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTASection />
    </>
  );
}
