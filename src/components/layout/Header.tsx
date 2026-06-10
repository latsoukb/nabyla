"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Phone } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { categories } from "@/lib/data/products";
import { cn } from "@/lib/utils";

const mobileLinks = [
  { href: "/boutique", label: "Toute la boutique", highlight: true },
  ...categories.map((cat) => ({
    href: `/boutique/${cat.slug}`,
    label: cat.name,
    highlight: false,
  })),
  { href: "/a-propos", label: "À propos", highlight: false },
  { href: "/contact", label: "Contact", highlight: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black-brand border-b border-gold/10">
        <div className="bg-black-soft text-gold/80 text-center py-2 text-xs tracking-wide">
          <p>
            Livraison gratuite à Dakar dès 50 000 FCFA ·{" "}
            <a
              href="tel:+221777454747"
              className="text-gold hover:text-gold-light transition-colors"
            >
              (+221) 77 745 47 47
            </a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              className="lg:hidden p-2 text-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/logo.png"
                  alt="Nabylaa"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-lg lg:text-xl font-bold text-gold tracking-[0.15em] leading-none">
                  NABYLAA
                </p>
                <p className="text-[10px] text-gold/50 tracking-[0.25em] uppercase mt-0.5">
                  By Hijab Store
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/boutique"
                className="text-ivory/90 hover:text-gold transition-colors font-medium text-sm tracking-wide"
              >
                Boutique
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/boutique/${cat.slug}`}
                  className="text-ivory/50 hover:text-gold transition-colors text-sm tracking-wide"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/a-propos"
                className="text-ivory/50 hover:text-gold transition-colors text-sm tracking-wide"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-ivory/50 hover:text-gold transition-colors text-sm tracking-wide"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-1 text-gold">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:text-gold-light transition-colors"
                aria-label="Rechercher"
              >
                <Search size={20} />
              </button>
              <a
                href="tel:+221777454747"
                className="hidden sm:flex p-2 hover:text-gold-light transition-colors"
                aria-label="Appeler"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={openCart}
                className="relative p-2 hover:text-gold-light transition-colors"
                aria-label="Panier"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold text-black-brand text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="pb-4">
              <input
                type="search"
                placeholder="Rechercher un produit..."
                className="w-full px-4 py-3 rounded-full border border-gold/20 bg-black-soft text-ivory placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/30"
                autoFocus
              />
            </div>
          )}
        </div>
      </header>

      {/* Menu mobile — en dehors du header pour éviter les conflits de z-index */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[200] transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          className="absolute inset-0 bg-black/70"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer le menu"
        />

        <nav
          className={cn(
            "absolute top-0 left-0 h-full w-[min(320px,85vw)] bg-black-brand shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gold/20 bg-black-soft">
            <p className="font-display text-gold tracking-[0.15em] text-sm font-bold">
              MENU
            </p>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gold hover:text-gold-light transition-colors"
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-5 py-4 text-base border-b border-gold/10 transition-colors",
                  link.highlight
                    ? "text-gold font-semibold hover:bg-gold/10"
                    : "text-ivory hover:text-gold hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-5 py-5 border-t border-gold/20 bg-black-soft">
            <a
              href="tel:+221777454747"
              className="flex items-center gap-2 text-gold text-sm"
            >
              <Phone size={16} />
              (+221) 77 745 47 47
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
