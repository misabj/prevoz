import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("about");
  const tStats = await getTranslations("home.statistics");
  const values = ["professionalism", "dignity", "reliability", "experience"];
  const stats = ["availability", "experience", "countries", "transports"];

  return (
    <>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/team/team-1.jpg"
                alt="Professional funeral services team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display text-accent mb-6">
                {t("story.title")}
              </h2>
              {(t.raw("story.paragraphs") as string[]).map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground/80 mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("mission.title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((key) => (
              <div key={key} className="bg-muted rounded-xl p-6">
                <h3 className="text-xl font-display text-accent mb-2">
                  {t(`mission.values.${key}.title`)}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {t(`mission.values.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
            {t("stats.description")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((key) => (
              <div key={key} className="text-center">
                <div className="text-3xl md:text-5xl font-display text-gold mb-2">
                  {tStats(`items.${key}.value`)}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {tStats(`items.${key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
