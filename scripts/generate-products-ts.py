#!/usr/bin/env python3
"""Generate src/lib/data/products.ts from manifest.json."""

import json
from pathlib import Path

MANIFEST = Path("/Users/lat/Desktop/nabyla/public/products/manifest.json")
OUT = Path("/Users/lat/Desktop/nabyla/src/lib/data/products.ts")

DESCRIPTIONS = {
    "turban-prestige": "Turban prestige Nabylaa, finition élégante pour un look raffiné.",
    "tunique-nabylaa": "Tunique signature NABYLAA. Coupe fluide et confortable, idéale pour un style modeste au quotidien.",
    "pret-a-poser": "Turban prêt à poser, facile à enfiler. Plusieurs coloris disponibles.",
    "turban-merry": "Lot de 3 turbans Merry à prix doux.",
    "easy-turban-channel": "Easy Turban Channel — turban pratique et tendance, plusieurs coloris.",
    "turban-nijme": "Turban NIJMÉ avec finitions soignées et broderies délicates.",
    "turban-fatima": "Turban Fatima doré, parfait pour les occasions et le quotidien.",
    "turban-fama": "Turban Fama, modèle classique et élégant.",
    "turban-pret-a-poser-perle": "Turban prêt à poser avec finition perles.",
    "collection-verte-maille": "Robe de la collection verte, haut maille et bas vert émeraude.",
    "collection-verte-palmier": "Robe de la collection verte, imprimé palmier avec accents verts.",
    "cape-maya": "Cape MAYA ample et élégante. Disponible en plusieurs coloris.",
    "tunique-brodee": "Tunique longue avec broderies, coupe fluide et confortable.",
    "tunique-beatrice": "Tunique Béatrice, modèle best-seller. Plusieurs coloris disponibles.",
    "cape-adan-et-eve": "Cape Adan et Ève à capuche, motifs traditionnels et finitions soignées.",
    "kany-mixte": "Ensemble Kany Mixte, style modeste et moderne.",
}

COLORS = {
    "tunique-beatrice": ["Vert lime", "Bleu marine", "Orange", "Magenta", "Bleu ciel"],
    "cape-maya": ["Noir", "Moutarde", "Rouge", "Vert"],
    "cape-adan-et-eve": ["Bogolan", "Marron", "Motifs traditionnels"],
    "easy-turban-channel": ["Vert", "Bleu", "Rose", "Noir", "Camel"],
    "turban-nijme": ["Noir", "Bleu nuit"],
    "turban-fatima": ["Or", "Beige"],
    "collection-verte-maille": ["Vert émeraude"],
    "collection-verte-palmier": ["Vert", "Imprimé palmier"],
    "kany-mixte": ["Multicolore"],
}

def main() -> None:
    manifest = json.loads(MANIFEST.read_text())
    lines = [
        'import { Category, Product } from "@/lib/types";',
        "",
        'export const WHATSAPP_CATALOG = "https://wa.me/c/221777454747";',
        'export const WHATSAPP_PHONE = "221777454747";',
        "",
        "export function whatsappOrderLink(productName: string): string {",
        '  const message = `Bonjour Nabylaa, je souhaite commander : ${productName}`;',
        "  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;",
        "}",
        "",
        "export const categories: {",
        "  slug: Category;",
        "  name: string;",
        "  description: string;",
        "}[] = [",
        '  { slug: "vetements", name: "Vêtements", description: "Tuniques, abayas et ensembles élégants" },',
        '  { slug: "turbans", name: "Turbans", description: "Turbans modernes et raffinés" },',
        '  { slug: "hijabs", name: "Hijabs", description: "Hijabs en mousseline, jersey et soie" },',
        '  { slug: "accessoires", name: "Accessoires", description: "Bonnets, bijoux et accessoires mode" },',
        '  { slug: "beaute", name: "Beauté", description: "Soins et produits de beauté halal" },',
        "];",
        "",
        "/** Catalogue WhatsApp Nabylaa — photos rognées depuis les captures */",
        "export const products: Product[] = [",
    ]

    for i, p in enumerate(manifest, start=1):
        slug = p["slug"]
        desc = DESCRIPTIONS.get(slug, f"{p['name']} — collection Nabylaa By Hijab Store.")
        if p.get("description_extra"):
            desc += f" {p['description_extra']}"
        images = p["images"]
        colors = COLORS.get(slug, ["Voir photos"])
        sizes = ["Unique"] if p["category"] == "turbans" else ["S", "M", "L", "XL"]

        lines.append("  {")
        lines.append(f'    id: "{i}",')
        lines.append(f'    slug: "{slug}",')
        lines.append(f'    name: "{p["name"]}",')
        lines.append(f'    description: "{desc}",')
        lines.append(f'    price: {p["price"]},')
        lines.append(f'    category: "{p["category"]}",')
        lines.append(f'    image: "{images[0]}",')
        lines.append(f'    images: {json.dumps(images)},')
        lines.append(f'    colors: {json.dumps(colors, ensure_ascii=False)},')
        lines.append(f'    sizes: {json.dumps(sizes)},')
        if p.get("isFeatured"):
            lines.append("    isFeatured: true,")
        if p.get("isNew"):
            lines.append("    isNew: true,")
        lines.append("    inStock: true,")
        lines.append("  },")

    lines += [
        "];",
        "",
        "export function getProductBySlug(slug: string): Product | undefined {",
        "  return products.find((p) => p.slug === slug);",
        "}",
        "",
        "export function getProductsByCategory(category: Category): Product[] {",
        "  return products.filter((p) => p.category === category);",
        "}",
        "",
        "export function getFeaturedProducts(): Product[] {",
        "  return products.filter((p) => p.isFeatured);",
        "}",
        "",
        "export function getNewProducts(): Product[] {",
        "  return products.filter((p) => p.isNew);",
        "}",
        "",
        "export function getCategoryName(slug: Category): string {",
        "  return categories.find((c) => c.slug === slug)?.name ?? slug;",
        "}",
        "",
    ]

    OUT.write_text("\n".join(lines))
    print(f"Wrote {OUT} ({len(manifest)} products)")


if __name__ == "__main__":
    main()
