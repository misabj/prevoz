import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const staticRoutes = [
    "",
    "o-nama",
    "usluge",
    "medjunarodni-prevoz-pokojnika",
    "dokumentacija-i-administracija",
    "vozni-park",
    "video",
    "blog",
    "kontakt",
    "faq",
    "politika-privatnosti",
    "uslovi-koriscenja",
  ];

  const entries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route ? `/${route}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });

    services.forEach((service) => {
      entries.push({
        url: `${baseUrl}/${locale}/usluge/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    blogPosts.forEach((post) => {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return entries;
}
