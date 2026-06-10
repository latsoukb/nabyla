import Link from "next/link";
import { categories } from "@/lib/data/products";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-3">
            Nos univers
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black-brand">
            Explorez nos catégories
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Catalogue en cours de préparation — vos produits seront ajoutés
            prochainement.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {categories.map((cat, index) => (
            <Link
              key={cat.slug}
              href={`/boutique/${cat.slug}`}
              className={`group relative rounded-2xl overflow-hidden border border-ivory-dark hover:border-gold/40 transition-all duration-300 ${
                index === 0
                  ? "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:min-h-[380px]"
                  : "aspect-square"
              }`}
            >
              <ProductPlaceholder
                label={cat.name}
                sublabel="Bientôt disponible"
                size={index === 0 ? "lg" : "sm"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-brand/90 via-black-brand/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3
                  className={`font-display font-bold text-gold ${
                    index === 0 ? "text-2xl lg:text-3xl" : "text-base"
                  }`}
                >
                  {cat.name}
                </h3>
                {index === 0 && (
                  <p className="text-ivory/50 text-sm mt-1 hidden sm:block">
                    {cat.description}
                  </p>
                )}
                <div className="flex items-center gap-1 text-gold/70 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                  Explorer <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
