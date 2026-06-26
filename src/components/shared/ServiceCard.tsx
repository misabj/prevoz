"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Globe,
  Plane,
  MapPin,
  FileText,
  Heart,
  Shield,
  Flower2,
  Receipt,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Plane,
  MapPin,
  FileText,
  Heart,
  Shield,
  Flower2,
  Receipt,
};

interface ServiceCardProps {
  slug: string;
  namespace?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "compact";
}

export function ServiceCard({
  slug,
  namespace = "services.items",
  href,
  icon,
  variant = "default",
}: ServiceCardProps) {
  const t = useTranslations(namespace);
  const tCommon = useTranslations("common");

  const service =
    namespace === "services.items"
      ? services.find((s) => s.slug === slug)
      : null;
  const iconName = icon || service?.icon || "Globe";
  const linkHref = href || `/usluge/${slug}`;
  const Icon = iconMap[iconName];

  return (
    <div
      className={cn(
        "group bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all",
        variant === "compact" && "p-5"
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-cream flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
        {Icon && (
          <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
        )}
      </div>
      <h3 className="text-xl font-display text-accent mb-2">
        {t(`${slug}.title`)}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {t(`${slug}.description`)}
      </p>
      <Link
        href={linkHref}
        className="inline-flex items-center text-sm font-medium text-accent hover:text-gold transition-colors"
      >
        {tCommon("readMore")}
      </Link>
    </div>
  );
}
