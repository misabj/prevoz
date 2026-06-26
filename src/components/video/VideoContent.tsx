"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { VideoCard } from "@/components/shared/VideoCard";
import { videos, type VideoCategory } from "@/data/videos";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const categories: { key: VideoCategory | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "all" },
  { key: "tips", labelKey: "tips" },
  { key: "documentation", labelKey: "documentation" },
  { key: "fleet", labelKey: "fleet" },
  { key: "services", labelKey: "services" },
];

export function VideoContent() {
  const t = useTranslations("video");
  const [active, setActive] = useState<VideoCategory | "all">("all");
  const filtered =
    active === "all" ? videos : videos.filter((v) => v.category === active);

  return (
    <>
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-display text-accent mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-foreground/80">{t("intro")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("subtitle")} />
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={cn(
                  "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                  active === cat.key
                    ? "bg-accent text-white"
                    : "bg-muted text-foreground hover:bg-cream"
                )}
              >
                {t(`categories.${cat.labelKey}`)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filtered.map((video) => (
              <VideoCard key={video.id} id={video.id} />
            ))}
          </div>
          <div className="text-center">
            <a
              href={siteConfig.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
            >
              {t("cta")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
