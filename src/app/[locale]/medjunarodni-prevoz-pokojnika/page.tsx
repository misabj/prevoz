import { getTranslations } from "next-intl/server";
import { MapPin, FileText, Phone } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ContactForm } from "@/components/shared/ContactForm";
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
    title: t("internationalTransport.title"),
    description: t("internationalTransport.description"),
  };
}

export default async function InternationalTransportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("internationalTransportPage");
  const tFaq = await getTranslations("faq");
  const countries = t.raw("countries.items") as {
    name: string;
    description: string;
  }[];
  const processSteps = t.raw("process.steps") as {
    title: string;
    description: string;
  }[];
  const docs = t.raw("documentation.items") as string[];
  const faq = faqItems.map((item) => ({
    question: tFaq(`items.${item.id}.question`),
    answer: tFaq(`items.${item.id}.answer`),
  }));

  return (
    <>
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-display text-accent mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-foreground/80">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display text-accent mb-6 text-center">
            {t("intro.title")}
          </h2>
          {(t.raw("intro.paragraphs") as string[]).map((p, i) => (
            <p key={i} className="text-foreground/80 mb-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("countries.title")}
            subtitle={t("countries.subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-display text-accent">
                    {country.name}
                  </h3>
                </div>
                <p className="text-text-muted text-sm">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("process.title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-display mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-display text-accent mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-display text-accent mb-4">
                {t("documentation.title")}
              </h2>
              <p className="text-foreground/80 mb-6">
                {t("documentation.intro")}
              </p>
              <ul className="space-y-3">
                {docs.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <FileText className="w-5 h-5 text-gold shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-display text-accent">
                  {t("cta.title")}
                </h3>
              </div>
              <p className="text-text-muted mb-6">{t("cta.subtitle")}</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader title={tFaq("title")} subtitle={tFaq("subtitle")} />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
