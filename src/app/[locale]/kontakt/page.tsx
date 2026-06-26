import { getTranslations } from "next-intl/server";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("contact");
  const tCards = await getTranslations("contact.cards");

  const cards = [
    {
      key: "phone",
      icon: Phone,
      href: `tel:${siteConfig.phonePrimary}`,
      external: false,
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      href: `https://wa.me/${siteConfig.whatsappNumber}`,
      external: true,
    },
    {
      key: "email",
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      key: "address",
      icon: MapPin,
      href: siteConfig.googleMapsUrl,
      external: true,
    },
  ];

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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title={t("form.title")}
                subtitle={t("form.description")}
                centered={false}
                className="mb-6"
              />
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-display text-accent mb-6">
                {t("title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={card.key}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={
                        card.external ? "noopener noreferrer" : undefined
                      }
                      className="bg-muted rounded-xl p-6 hover:shadow-md transition-all"
                    >
                      <Icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-lg font-display text-accent mb-1">
                        {tCards(`${card.key}.title`)}
                      </h3>
                      <p className="text-text-muted text-sm">
                        {tCards(`${card.key}.description`)}
                      </p>
                    </a>
                  );
                })}
              </div>
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe
                  src={siteConfig.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
