import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("home.title"),
      template: `%s | ${siteConfig.companyName}`,
    },
    description: t("home.description"),
    metadataBase: new URL("https://example.com"),
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      type: "website",
      locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: siteConfig.companyName,
    telephone: siteConfig.phonePrimary,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address,
      addressCountry: "RS",
    },
    url: `https://example.com/${locale}`,
    areaServed: "Europe",
    availableLanguage: ["Serbian", "English", "German"],
  };

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCallButton />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
