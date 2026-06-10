import Link from "next/link";
import { categories } from "@/lib/data/products";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";
import Button from "@/components/ui/Button";

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-black-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-3">
              Catalogue
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ivory">
              Bientôt en ligne
            </h2>
            <p className="text-ivory/50 mt-3 max-w-md">
              Notre sélection de produits sera disponible très prochainement.
              Restez connectées.
            </p>
          </div>
          <Link href="/boutique">
            <Button variant="outline">Voir la boutique</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {categories.slice(0, 4).map((cat) => (
            <div key={cat.slug} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/10 mb-4">
                <ProductPlaceholder
                  label={cat.name}
                  sublabel="Prochainement"
                  size="md"
                />
              </div>
              <h3 className="font-display text-lg text-gold tracking-wide">
                {cat.name}
              </h3>
              <p className="text-ivory/40 text-sm mt-1">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
