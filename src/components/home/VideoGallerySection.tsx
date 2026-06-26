"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { VideoCard } from "@/components/shared/VideoCard";
import { videos } from "@/data/videos";
import { siteConfig } from "@/config/site";

export function VideoGallerySection() {
  const t = useTranslations("home.videoGallery");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {videos.slice(0, 3).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VideoCard id={video.id} />
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={siteConfig.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-gold transition-colors"
          >
            {t("cta")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
