"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingBag, Search, Phone } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { categories } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);

  return (
    <header className="sticky top-0 z-50 bg-black-brand/95 backdrop-blur-md border-b border-gold/10">
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
            aria-label="Menu"
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

      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[88px] bg-black-brand z-40 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 gap-1">
          <Link
            href="/boutique"
            className="text-lg font-medium text-gold py-3 border-b border-gold/10"
            onClick={() => setMobileOpen(false)}
          >
            Toute la boutique
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/boutique/${cat.slug}`}
              className="text-ivory/70 py-3 border-b border-gold/10 tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/a-propos"
            className="text-ivory/70 py-3 border-b border-gold/10"
            onClick={() => setMobileOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-ivory/70 py-3"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
