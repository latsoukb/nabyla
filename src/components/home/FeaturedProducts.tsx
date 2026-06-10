import Link from "next/link";
import { getFeaturedProducts } from "@/lib/data/products";
import ProductCard from "@/components/shop/ProductCard";
import Button from "@/components/ui/Button";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-24 bg-black-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-3">
              Sélection
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ivory">
              Nos coups de cœur
            </h2>
            <p className="text-ivory/50 mt-3 max-w-md">
              Les pièces phares de notre catalogue WhatsApp, disponibles en
              ligne.
            </p>
          </div>
          <Link href="/boutique">
            <Button variant="outline">Voir tout</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
