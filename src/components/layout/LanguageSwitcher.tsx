"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const locales = [
  { code: "sr", label: "SR" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.locale as string) ?? "sr";

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => {
        const isActive = currentLocale === locale.code;
        return (
          <Link
            key={locale.code}
            href={pathname}
            locale={locale.code}
            className={cn(
              "px-2 py-1 text-xs font-medium rounded transition-colors",
              isActive
                ? "bg-accent text-white"
                : "text-accent hover:bg-muted"
            )}
          >
            {locale.label}
          </Link>
        );
      })}
    </div>
  );
}
