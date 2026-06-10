import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Phone, MapPin, Mail } from "lucide-react";
import { categories } from "@/lib/data/products";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black-brand text-ivory mt-auto border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo size="sm" />
              <div>
                <p className="font-display text-lg font-bold text-gold tracking-[0.15em]">
                  NABYLAA
                </p>
                <p className="text-[10px] text-gold/40 tracking-[0.2em] uppercase">
                  By Hijab Store
                </p>
              </div>
            </div>
            <p className="text-ivory/40 text-sm leading-relaxed mb-6">
              La touche qui fait la différence. Mode modeste, élégance et
              qualité au cœur de Dakar.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/nabylaa_byhijabstore_officiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black-brand transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/NabylaaByHijabStore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black-brand transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4 tracking-wide">Catégories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/boutique/${cat.slug}`}
                    className="text-ivory/40 hover:text-gold transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4 tracking-wide">Informations</h4>
            <ul className="space-y-2 text-sm text-ivory/40">
              <li>
                <Link href="/a-propos" className="hover:text-gold transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="hover:text-gold transition-colors">
                  Livraison & Retours
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-gold transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory/40">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>Sacré Coeur 3, AUCHAN, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+221777454747" className="hover:text-gold transition-colors">
                  (+221) 77 745 47 47
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:contact@nabylaa.com"
                  className="hover:text-gold transition-colors"
                >
                  contact@nabylaa.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <div className="border border-gold/20 rounded-lg px-3 py-2 flex items-center gap-2">
                <div className="w-7 h-7 bg-[#1DC8FF] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  W
                </div>
                <span className="text-ivory/60 text-xs">Wave</span>
              </div>
              <div className="border border-gold/20 rounded-lg px-3 py-2 flex items-center gap-2">
                <div className="w-7 h-7 bg-[#FF6600] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                  OM
                </div>
                <span className="text-ivory/60 text-xs">Orange Money</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 text-center text-sm text-ivory/30">
          <p>
            © {new Date().getFullYear()} Nabylaa By Hijab Store. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
