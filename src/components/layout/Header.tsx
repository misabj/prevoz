import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { EmergencyCallBar } from "./EmergencyCallBar";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export async function Header() {
  const t = await getTranslations("navigation");
  const tHeader = await getTranslations("header");

  const links = [
    { href: "/", label: t("home") },
    { href: "/o-nama", label: t("about") },
    { href: "/usluge", label: t("services") },
    { href: "/vozni-park", label: t("fleet") },
    { href: "/video", label: t("video") },
    { href: "/blog", label: t("blog") },
    { href: "/kontakt", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <EmergencyCallBar />
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-accent font-semibold tracking-tight truncate max-w-[55%]"
        >
          {siteConfig.companyName}
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href={`tel:${siteConfig.phonePrimary}`}
            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {tHeader("cta")}
          </a>
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
