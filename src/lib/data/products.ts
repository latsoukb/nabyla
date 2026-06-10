import { Category, Product } from "@/lib/types";

export const WHATSAPP_CATALOG = "https://wa.me/c/221777454747";
export const WHATSAPP_PHONE = "221777454747";

export function whatsappOrderLink(productName: string): string {
  const message = `Bonjour Nabylaa, je souhaite commander : ${productName}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

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
    description: "Bonnets, bijoux et accessoires mode",
  },
  {
    slug: "beaute",
    name: "Beauté",
    description: "Soins et produits de beauté halal",
  },
];

/**
 * Produits issus du catalogue WhatsApp Nabylaa (+221 77 745 47 47)
 * et du site nabylaa.com — photos à ajouter dans public/products/
 */
export const products: Product[] = [
  {
    id: "38",
    slug: "tunique-nabylaa",
    name: "Tunique Nabylaa",
    description:
      "Tunique élégante de la collection Nabylaa. Coupe fluide et confortable, idéale pour un look modeste raffiné au quotidien ou pour les occasions.",
    price: 50000,
    category: "vetements",
    image: "",
    images: [],
    colors: ["Noir", "Beige", "Bordeaux", "Bleu nuit"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: "140",
    slug: "tunique-elegante",
    name: "Tunique Élégante",
    description:
      "Tunique sobre et chic, parfaite pour sublimer votre style modeste. Tissu de qualité, finitions soignées.",
    price: 45000,
    category: "vetements",
    image: "",
    images: [],
    colors: ["Camel", "Noir", "Vert sauge"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "139",
    slug: "turban-nene-wax",
    name: "Turban Néné Wax",
    description:
      "Turban en wax vibrant, facile à nouer et confortable toute la journée. Un incontournable de la collection Nabylaa.",
    price: 7500,
    category: "turbans",
    image: "",
    images: [],
    colors: ["Wax multicolore", "Wax bleu", "Wax rouge", "Wax vert"],
    sizes: ["Unique"],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: "136",
    slug: "turban-lolita",
    name: "Turban Lolita",
    description:
      "Turban Lolita tendance, doux et pratique. Disponible en plusieurs coloris pour accompagner toutes vos tenues.",
    price: 6000,
    category: "turbans",
    image: "",
    images: [],
    colors: ["Noir", "Blanc", "Rose", "Camel", "Bordeaux"],
    sizes: ["Unique"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "37",
    slug: "cap-adan-and-eve",
    name: "Cap Adan and Eve",
    description:
      "Bonnet/cap stylé Adan and Eve de la collection Nabylaa. Accessoire mode parfait pour compléter votre look hijab.",
    price: 20000,
    category: "accessoires",
    image: "",
    images: [],
    colors: ["Noir", "Beige", "Blanc"],
    sizes: ["Unique"],
    isFeatured: true,
    inStock: true,
  },
];

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
