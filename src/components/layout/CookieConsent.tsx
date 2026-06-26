"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisible(!localStorage.getItem("cookie-consent"));
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  // Avoid hydration mismatch by not rendering until after mount
  if (!mounted || !visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-white border border-border rounded-lg shadow-lg p-4">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-foreground">
          Ova veb stranica koristi osnovne kolačiće neophodne za funkcionalnost
          sajta. Nastavkom korišćenja prihvatate upotrebu kolačića.
        </p>
        <button onClick={accept} aria-label="Close" className="p-1 shrink-0">
          <X className="w-4 h-4 text-accent" />
        </button>
      </div>
      <button
        onClick={accept}
        className="mt-3 px-4 py-2 bg-accent text-white text-sm rounded hover:bg-accent-light transition-colors"
      >
        Prihvatam
      </button>
    </div>
  );
}
