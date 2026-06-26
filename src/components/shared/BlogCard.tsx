"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  variant?: "default" | "compact";
}

export function BlogCard({ slug, variant = "default" }: BlogCardProps) {
  const t = useTranslations("blog.articles");
  const tBlog = useTranslations("blog");
  const tCommon = useTranslations("common");
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return null;

  const title = t(`${slug}.title`);
  const excerpt = t(`${slug}.excerpt`);

  return (
    <article
      className={cn(
        "group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all",
        variant === "compact" && "flex flex-col"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-3">
          <span className="uppercase tracking-wider font-medium text-accent">
            {tBlog(`categories.${post.category}`)}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime} {tBlog("readTime")}
          </span>
        </div>
        <h3 className="text-xl font-display text-accent mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-accent hover:text-gold transition-colors"
        >
          {tCommon("learnMore")}
        </Link>
      </div>
    </article>
  );
}
