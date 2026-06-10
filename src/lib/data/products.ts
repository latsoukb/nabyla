import { Category, Product } from "@/lib/types";

export const categories: {
  slug: Category;
  name: string;
  description: string;
}[] = [
  {
    slug: "vetements",
    name: "Vêtements",
    description: "Tuniques, abayas et ensembles élégants",
  },
  {
    slug: "turbans",
    name: "Turbans",
    description: "Turbans modernes et raffinés",
  },
  {
    slug: "hijabs",
    name: "Hijabs",
    description: "Hijabs en mousseline, jersey et soie",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    description: "Bijoux, sacs et accessoires mode",
  },
  {
    slug: "beaute",
    name: "Beauté",
    description: "Soins et produits de beauté halal",
  },
];

/** Catalogue vide — à remplir avec les vrais produits de la boutique */
export const products: Product[] = [];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getCategoryName(slug: Category): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
