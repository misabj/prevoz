"use client";

import { useTranslations } from "next-intl";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { videos } from "@/data/videos";

interface VideoCardProps {
  id: string;
}

export function VideoCard({ id }: VideoCardProps) {
  const t = useTranslations("video.items");
  const video = videos.find((v) => v.id === id);

  if (!video) return null;

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <YouTubeEmbed videoId={video.youtubeId} title={t(`${id}.title`)} />
      <div className="p-5">
        <h3 className="text-lg font-display text-accent mb-2">
          {t(`${id}.title`)}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {t(`${id}.description`)}
        </p>
      </div>
    </div>
  );
}
