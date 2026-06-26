import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("terms.title"),
    description: t("terms.description"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("terms");
  const sections = ["general", "services", "liability", "contact"];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display text-accent mb-4">
          {t("title")}
        </h1>
        <p className="text-text-muted mb-8">{t("lastUpdated")}</p>
        <p className="text-foreground/80 mb-10 leading-relaxed">
          {t("intro")}
        </p>
        <div className="space-y-10">
          {sections.map((key) => (
            <section key={key}>
              <h2 className="text-2xl font-display text-accent mb-3">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {t(`sections.${key}.content`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
