"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phonePrimary}`}
      className="fixed bottom-20 right-4 z-50 lg:hidden flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-full shadow-lg hover:bg-accent-light transition-colors"
      aria-label="Call us 24/7"
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm font-medium">24/7</span>
    </a>
  );
}
