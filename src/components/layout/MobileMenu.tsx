"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const tHeader = useTranslations("header");

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
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label={tHeader("menu")}
        className="p-1"
      >
        <Menu className="w-6 h-6 text-accent" />
      </button>
      {open && (
        <div className="fixed inset-0 z-[999] bg-white overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-display text-xl text-accent font-semibold">
              {siteConfig.companyName}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label={tHeader("close")}
              className="p-1"
            >
              <X className="w-6 h-6 text-accent" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-accent hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phonePrimary}`}
              className="mt-4 flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              {tHeader("cta")}
            </a>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
