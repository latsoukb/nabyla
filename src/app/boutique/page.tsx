import { products, categories } from "@/lib/data/products";
import ProductCard from "@/components/shop/ProductCard";
import CatalogEmpty from "@/components/shop/CatalogEmpty";
import Link from "next/link";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

export const metadata = {
  title: "Boutique | Nabylaa By Hijab Store",
  description: "Découvrez toute notre collection de mode modeste",
};

export default function BoutiquePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-3">
          Nabylaa
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-black-brand mb-4">
          Notre Boutique
        </h1>
        <p className="text-muted max-w-lg mx-auto">
          {products.length > 0
            ? "Explorez notre collection complète de mode modeste."
            : "Prototype en cours — le catalogue sera rempli avec vos vrais produits."}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/boutique/${cat.slug}`}
            className="group text-center"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-ivory-dark group-hover:border-gold/40 transition-colors mb-3">
              <ProductPlaceholder label={cat.name} size="sm" showLogo={false} />
            </div>
            <p className="text-sm font-medium text-black-brand group-hover:text-gold transition-colors tracking-wide">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <CatalogEmpty />
      )}
    </div>
  );
}
