import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { routing } from "@/i18n/routing";
import { services } from "@/data/services";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const t = await getTranslations({ locale, namespace: "services.items" });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.description`),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const t = await getTranslations("services.items");
  const tCommon = await getTranslations("common");

  return (
    <>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Link
            href="/usluge"
            className="inline-flex items-center gap-2 text-accent hover:text-gold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {tCommon("viewAll")}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={service.image}
                alt={t(`${slug}.title`)}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-display text-accent mb-6">
                {t(`${slug}.title`)}
              </h1>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {t(`${slug}.description`)}
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactCTASection />
    </>
  );
}
