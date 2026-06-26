import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Globe, Camera, Play } from "lucide-react";

export async function Footer() {
  const t = await getTranslations("navigation");
  const tFooter = await getTranslations("footer");
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/medjunarodni-prevoz-pokojnika", label: t("internationalTransport") },
    { href: "/dokumentacija-i-administracija", label: t("documentation") },
    { href: "/usluge", label: t("services") },
    { href: "/vozni-park", label: t("fleet") },
  ];

  const infoLinks = [
    { href: "/o-nama", label: t("about") },
    { href: "/blog", label: t("blog") },
    { href: "/faq", label: t("faq") },
    { href: "/politika-privatnosti", label: t("privacy") },
    { href: "/uslovi-koriscenja", label: t("terms") },
  ];

  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4 break-words">{siteConfig.companyName}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {tFooter("description")}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tFooter("services")}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tFooter("information")}</h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{tFooter("contact")}</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              {siteConfig.facebookUrl && (
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Globe className="w-5 h-5 text-white/80 hover:text-gold transition-colors" />
                </a>
              )}
              {siteConfig.instagramUrl && (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Camera className="w-5 h-5 text-white/80 hover:text-gold transition-colors" />
                </a>
              )}
              {siteConfig.youtubeChannelUrl && (
                <a
                  href={siteConfig.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Play className="w-5 h-5 text-white/80 hover:text-gold transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>{tFooter("copyright", { year: currentYear })}</p>
          <div className="flex items-center gap-6">
            <Link
              href="/politika-privatnosti"
              className="hover:text-white transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/uslovi-koriscenja"
              className="hover:text-white transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
