"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tCommon = useTranslations("common");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const privacy = formData.get("privacy");

    if (!name.trim()) newErrors.name = t("errors.nameRequired");
    if (!phone.trim()) newErrors.phone = t("errors.phoneRequired");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("errors.emailInvalid");
    }
    if (!message.trim()) newErrors.message = t("errors.messageRequired");
    if (!privacy) newErrors.privacy = t("errors.privacyRequired");

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    // Mock submit - replace with EmailJS, Resend API or PHP endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-cream border border-border rounded-xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display text-accent mb-2">{t("success")}</h3>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm space-y-5"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-accent mb-1"
        >
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-lg border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-accent mb-1"
          >
            {t("phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-accent mb-1"
          >
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-accent mb-1"
          >
            {t("country")}
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full rounded-lg border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-accent mb-1"
          >
            {t("city")}
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full rounded-lg border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-accent mb-1"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      <div>
        <label className="flex items-start gap-2 text-sm text-text-muted">
          <input type="checkbox" name="privacy" className="mt-1" />
          <span>
            {t("privacy")}{" "}
            <Link
              href="/politika-privatnosti"
              className="text-accent hover:underline"
            >
              {t("privacyLink")}
            </Link>
          </span>
        </label>
        {errors.privacy && (
          <p className="text-red-500 text-xs mt-1">{errors.privacy}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-light transition-colors disabled:opacity-70"
      >
        {status === "submitting" ? tCommon("sending") : tCommon("sendInquiry")}
      </button>
    </form>
  );
}
