import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/shared/BlogCard";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const t = await getTranslations({ locale, namespace: "blog.articles" });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.excerpt`),
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations("blog.articles");
  const tBlog = await getTranslations("blog");
  const tCommon = await getTranslations("common");
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <article className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-gold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {tCommon("viewAll")}
          </Link>
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={t(`${slug}.title`)}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
            <span className="uppercase tracking-wider font-medium text-accent">
              {tBlog(`categories.${post.category}`)}
            </span>
            <span>{post.date}</span>
            <span>
              {post.readTime} {tBlog("readTime")}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display text-accent mb-8">
            {t(`${slug}.title`)}
          </h1>
          <div className="max-w-none text-foreground/80">
            {(t.raw(`${slug}.content`) as string[]).map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display text-accent mb-8 text-center">
              {tBlog("relatedArticles")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((post) => (
                <BlogCard key={post.slug} slug={post.slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTASection />
    </>
  );
}
