import { notFound } from "next/navigation";
import Link from "next/link";
import {
  categories,
  getProductsByCategory,
  getCategoryName,
} from "@/lib/data/products";
import { Category } from "@/lib/types";
import ProductCard from "@/components/shop/ProductCard";
import CatalogEmpty from "@/components/shop/CatalogEmpty";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const name = getCategoryName(category as Category);
  return {
    title: `${name} | Nabylaa By Hijab Store`,
    description: `Découvrez notre collection ${name.toLowerCase()}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) notFound();

  const categoryProducts = getProductsByCategory(category as Category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="text-sm text-muted mb-8 tracking-wide">
        <Link href="/boutique" className="hover:text-gold transition-colors">
          Boutique
        </Link>
        <span className="mx-2 text-gold/40">/</span>
        <span className="text-black-brand">{cat.name}</span>
      </nav>

      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-black-brand mb-3">
          {cat.name}
        </h1>
        <p className="text-muted">{cat.description}</p>
      </div>

      {categoryProducts.length === 0 ? (
        <CatalogEmpty
          title={`${cat.name} — Bientôt disponible`}
          description={`Notre sélection ${cat.name.toLowerCase()} sera ajoutée prochainement. Contactez-nous pour connaître les disponibilités en boutique.`}
        />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
