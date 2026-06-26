export type BlogCategory = "transport" | "documentation" | "advice";

export interface BlogPost {
  slug: string;
  image: string;
  category: BlogCategory;
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kako-organizovati-prevoz-pokojnika-iz-inostranstva",
    image: "/images/blog/blog-1.jpg",
    category: "transport",
    date: "2026-06-15",
    readTime: 5,
  },
  {
    slug: "koja-dokumentacija-je-potrebna-za-medjunarodni-prevoz",
    image: "/images/blog/blog-2.jpg",
    category: "documentation",
    date: "2026-06-10",
    readTime: 7,
  },
  {
    slug: "sta-uraditi-u-sucaju-smrti-u-inostranstvu",
    image: "/images/blog/blog-3.jpg",
    category: "advice",
    date: "2026-06-05",
    readTime: 6,
  },
  {
    slug: "troskovi-medjunarodnog-prevoza-pokojnika",
    image: "/images/blog/blog-4.jpg",
    category: "transport",
    date: "2026-05-28",
    readTime: 4,
  },
  {
    slug: "kako-izabrati-pogrebno-preduzece",
    image: "/images/blog/blog-5.jpg",
    category: "advice",
    date: "2026-05-20",
    readTime: 5,
  },
];
