import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl font-display text-accent mb-4">404</h1>
        <h2 className="text-2xl text-foreground mb-6">
          Stranica nije pronađena
        </h2>
        <p className="text-text-muted mb-8">
          Tražena stranica ne postoji ili je premeštena.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-light transition-colors"
        >
          Nazad na početnu
        </Link>
      </div>
    </div>
  );
}
