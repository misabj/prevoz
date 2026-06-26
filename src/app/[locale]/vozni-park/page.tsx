import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Check, Shield } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { vehicles } from "@/data/vehicles";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("fleet.title"),
    description: t("fleet.description"),
  };
}

export default async function FleetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("fleet");
  const tVehicles = await getTranslations("fleet.items");
  const safetyItems = t.raw("safety.items") as string[];

  return (
    <>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
          <p className="text-center text-foreground/80 max-w-3xl mx-auto mb-12">
            {t("description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={tVehicles(`${vehicle.id}.name`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-accent mb-2">
                    {tVehicles(`${vehicle.id}.name`)}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {tVehicles(`${vehicle.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-gold" />
                <h2 className="text-3xl font-display text-white">
                  {t("safety.title")}
                </h2>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("safety.description")}
              </p>
              <ul className="space-y-3">
                {safetyItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/fleet/hearse-5.jpg"
                alt="Funeral vehicle safety and equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
