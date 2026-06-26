import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("documentation.title"),
    description: t("documentation.description"),
  };
}

export default async function DocumentationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("documentationPage");
  const sections = ["whatWeHandle", "procedure", "whyHelp", "family"];

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
        <div className="container mx-auto px-4 max-w-4xl">
          {sections.map((key) => (
            <div key={key} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-display text-accent mb-4">
                {t(`sections.${key}.title`)}
              </h2>
              {(t.raw(`sections.${key}.paragraphs`) as string[]).map((p, i) => (
                <p
                  key={i}
                  className="text-foreground/80 mb-4 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {key === "whatWeHandle" && (
                <ul className="mt-6 space-y-3">
                  {(t.raw("sections.whatWeHandle.items") as string[]).map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <Check className="w-5 h-5 text-gold shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-display text-accent mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-foreground/80 mb-10">{t("cta.subtitle")}</p>
          <ContactForm />
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
