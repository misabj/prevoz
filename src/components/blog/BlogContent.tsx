"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/shared/BlogCard";
import { blogPosts, type BlogCategory } from "@/data/blog";
import { cn } from "@/lib/utils";

const categories: { key: BlogCategory | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "all" },
  { key: "transport", labelKey: "transport" },
  { key: "documentation", labelKey: "documentation" },
  { key: "advice", labelKey: "advice" },
];

export function BlogContent() {
  const t = useTranslations("blog");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all"
  );

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      const title = t(`articles.${post.slug}.title`).toLowerCase();
      const excerpt = t(`articles.${post.slug}.excerpt`).toLowerCase();
      const matchesSearch =
        !search ||
        title.includes(search.toLowerCase()) ||
        excerpt.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, t]);

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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                    activeCategory === cat.key
                      ? "bg-accent text-white"
                      : "bg-muted text-foreground hover:bg-cream"
                  )}
                >
                  {t(`categories.${cat.labelKey}`)}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full border border-border focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <BlogCard key={post.slug} slug={post.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
