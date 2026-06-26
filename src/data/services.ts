export interface Service {
  slug: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "medjunarodni-prevoz-pokojnika",
    icon: "Globe",
    image: "/images/hero/road-4.jpg",
  },
  {
    slug: "prevoz-pokojnika-iz-inostranstva",
    icon: "Plane",
    image: "/images/hero/europe-1.jpg",
  },
  {
    slug: "prevoz-pokojnika-u-srbiji",
    icon: "MapPin",
    image: "/images/hero/road-2.jpg",
  },
  {
    slug: "administracija-i-dokumentacija",
    icon: "FileText",
    image: "/images/services/docs-2.jpg",
  },
  {
    slug: "organizacija-sahrane",
    icon: "Heart",
    image: "/images/services/candle-2.jpg",
  },
  {
    slug: "pogrebna-oprema",
    icon: "Shield",
    image: "/images/services/memorial-1.jpg",
  },
  {
    slug: "cvetni-aranzmani",
    icon: "Flower2",
    image: "/images/services/roses-2.jpg",
  },
  {
    slug: "naplata-pogrebnih-troskova",
    icon: "Receipt",
    image: "/images/services/docs-5.jpg",
  },
];
