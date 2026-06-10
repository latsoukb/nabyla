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
  { slug: "vetements", name: "Vêtements", description: "Tuniques, abayas et ensembles élégants" },
  { slug: "turbans", name: "Turbans", description: "Turbans modernes et raffinés" },
  { slug: "hijabs", name: "Hijabs", description: "Hijabs en mousseline, jersey et soie" },
  { slug: "accessoires", name: "Accessoires", description: "Bonnets, bijoux et accessoires mode" },
  { slug: "beaute", name: "Beauté", description: "Soins et produits de beauté halal" },
];

/** Catalogue WhatsApp Nabylaa — photos rognées depuis les captures */
export const products: Product[] = [
  {
    id: "1",
    slug: "turban-prestige",
    name: "Turban prestige",
    description: "Turban prestige Nabylaa, finition élégante pour un look raffiné.",
    price: 20000,
    category: "turbans",
    image: "/products/turban-prestige/1.jpg",
    images: ["/products/turban-prestige/1.jpg"],
    colors: ["Voir photos"],
    sizes: ["Unique"],
    inStock: true,
  },
  {
    id: "2",
    slug: "tunique-nabylaa",
    name: "Tunique NABYLAA",
    description: "Tunique signature NABYLAA. Coupe fluide et confortable, idéale pour un style modeste au quotidien.",
    price: 50000,
    category: "vetements",
    image: "/products/tunique-nabylaa/1.jpg",
    images: ["/products/tunique-nabylaa/1.jpg", "/products/tunique-nabylaa/2.jpg"],
    colors: ["Voir photos"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "pret-a-poser",
    name: "Prêt à poser",
    description: "Turban prêt à poser, facile à enfiler. Plusieurs coloris disponibles. Disponible à partir de 10 000 FCFA (certaines finitions à 15 000 FCFA).",
    price: 10000,
    category: "turbans",
    image: "/products/pret-a-poser/1.jpg",
    images: ["/products/pret-a-poser/1.jpg"],
    colors: ["Voir photos"],
    sizes: ["Unique"],
    inStock: true,
  },
  {
    id: "4",
    slug: "turban-merry",
    name: "Turban Merry",
    description: "Lot de 3 turbans Merry à prix doux. Lot de 3 turbans à 10 000 FCFA.",
    price: 10000,
    category: "turbans",
    image: "/products/turban-merry/1.jpg",
    images: ["/products/turban-merry/1.jpg"],
    colors: ["Voir photos"],
    sizes: ["Unique"],
    inStock: true,
  },
  {
    id: "5",
    slug: "easy-turban-channel",
    name: "Easy Turban Channel",
    description: "Easy Turban Channel — turban pratique et tendance, plusieurs coloris.",
    price: 8000,
    category: "turbans",
    image: "/products/easy-turban-channel/1.jpg",
    images: ["/products/easy-turban-channel/1.jpg", "/products/easy-turban-channel/2.jpg", "/products/easy-turban-channel/3.jpg", "/products/easy-turban-channel/4.jpg", "/products/easy-turban-channel/5.jpg", "/products/easy-turban-channel/6.jpg", "/products/easy-turban-channel/7.jpg", "/products/easy-turban-channel/8.jpg"],
    colors: ["Vert", "Bleu", "Rose", "Noir", "Camel"],
    sizes: ["Unique"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "6",
    slug: "turban-nijme",
    name: "Turban NIJMÉ",
    description: "Turban NIJMÉ avec finitions soignées et broderies délicates.",
    price: 20000,
    category: "turbans",
    image: "/products/turban-nijme/1.jpg",
    images: ["/products/turban-nijme/1.jpg", "/products/turban-nijme/2.jpg", "/products/turban-nijme/3.jpg", "/products/turban-nijme/4.jpg"],
    colors: ["Noir", "Bleu nuit"],
    sizes: ["Unique"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "7",
    slug: "turban-fatima",
    name: "Turban Fatima",
    description: "Turban Fatima doré, parfait pour les occasions et le quotidien.",
    price: 20000,
    category: "turbans",
    image: "/products/turban-fatima/1.jpg",
    images: ["/products/turban-fatima/1.jpg", "/products/turban-fatima/2.jpg", "/products/turban-fatima/3.jpg"],
    colors: ["Or", "Beige"],
    sizes: ["Unique"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "8",
    slug: "turban-fama",
    name: "Turban Fama",
    description: "Turban Fama, modèle classique et élégant.",
    price: 20000,
    category: "turbans",
    image: "/products/turban-fama/1.jpg",
    images: ["/products/turban-fama/1.jpg"],
    colors: ["Voir photos"],
    sizes: ["Unique"],
    inStock: true,
  },
  {
    id: "9",
    slug: "turban-pret-a-poser-perle",
    name: "Turban prêt à poser perle",
    description: "Turban prêt à poser avec finition perles.",
    price: 15000,
    category: "turbans",
    image: "/products/turban-pret-a-poser-perle/1.jpg",
    images: ["/products/turban-pret-a-poser-perle/1.jpg", "/products/turban-pret-a-poser-perle/2.jpg"],
    colors: ["Voir photos"],
    sizes: ["Unique"],
    inStock: true,
  },
  {
    id: "10",
    slug: "collection-verte-maille",
    name: "Collection verte — Maille",
    description: "Robe de la collection verte, haut maille et bas vert émeraude.",
    price: 30000,
    category: "vetements",
    image: "/products/collection-verte-maille/1.jpg",
    images: ["/products/collection-verte-maille/1.jpg"],
    colors: ["Vert émeraude"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    inStock: true,
  },
  {
    id: "11",
    slug: "collection-verte-palmier",
    name: "Collection verte — Palmier",
    description: "Robe de la collection verte, imprimé palmier avec accents verts.",
    price: 25000,
    category: "vetements",
    image: "/products/collection-verte-palmier/1.jpg",
    images: ["/products/collection-verte-palmier/1.jpg"],
    colors: ["Vert", "Imprimé palmier"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    inStock: true,
  },
  {
    id: "12",
    slug: "cape-maya",
    name: "Cape MAYA",
    description: "Cape MAYA ample et élégante. Disponible en plusieurs coloris.",
    price: 25000,
    category: "vetements",
    image: "/products/cape-maya/1.jpg",
    images: ["/products/cape-maya/1.jpg", "/products/cape-maya/2.jpg", "/products/cape-maya/3.jpg", "/products/cape-maya/4.jpg", "/products/cape-maya/5.jpg", "/products/cape-maya/6.jpg", "/products/cape-maya/7.jpg"],
    colors: ["Noir", "Moutarde", "Rouge", "Vert"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "13",
    slug: "tunique-brodee",
    name: "Tunique",
    description: "Tunique longue avec broderies, coupe fluide et confortable.",
    price: 35000,
    category: "vetements",
    image: "/products/tunique-brodee/1.jpg",
    images: ["/products/tunique-brodee/1.jpg"],
    colors: ["Voir photos"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "14",
    slug: "tunique-beatrice",
    name: "Tunique Béatrice",
    description: "Tunique Béatrice, modèle best-seller. Plusieurs coloris disponibles.",
    price: 35000,
    category: "vetements",
    image: "/products/tunique-beatrice/1.jpg",
    images: ["/products/tunique-beatrice/1.jpg", "/products/tunique-beatrice/2.jpg", "/products/tunique-beatrice/3.jpg", "/products/tunique-beatrice/4.jpg", "/products/tunique-beatrice/5.jpg"],
    colors: ["Vert lime", "Bleu marine", "Orange", "Magenta", "Bleu ciel"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    isNew: true,
    inStock: true,
  },
  {
    id: "15",
    slug: "cape-adan-et-eve",
    name: "Cape Adan et Ève",
    description: "Cape Adan et Ève à capuche, motifs traditionnels et finitions soignées.",
    price: 25000,
    category: "vetements",
    image: "/products/cape-adan-et-eve/1.jpg",
    images: ["/products/cape-adan-et-eve/1.jpg", "/products/cape-adan-et-eve/2.jpg", "/products/cape-adan-et-eve/3.jpg", "/products/cape-adan-et-eve/4.jpg"],
    colors: ["Bogolan", "Marron", "Motifs traditionnels"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    inStock: true,
  },
  {
    id: "16",
    slug: "kany-mixte",
    name: "Kany Mixte",
    description: "Ensemble Kany Mixte, style modeste et moderne.",
    price: 25000,
    category: "vetements",
    image: "/products/kany-mixte/1.jpg",
    images: ["/products/kany-mixte/1.jpg", "/products/kany-mixte/2.jpg", "/products/kany-mixte/3.jpg", "/products/kany-mixte/4.jpg", "/products/kany-mixte/5.jpg"],
    colors: ["Multicolore"],
    sizes: ["S", "M", "L", "XL"],
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
