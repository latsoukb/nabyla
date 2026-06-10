import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getCategoryName } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import ProductDetailClient from "@/components/shop/ProductDetailClient";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produit non trouvé" };
  return {
    title: `${product.name} | Nabylaa By Hijab Store`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="text-sm text-muted mb-8 tracking-wide">
        <Link href="/boutique" className="hover:text-gold transition-colors">
          Boutique
        </Link>
        <span className="mx-2 text-gold/30">/</span>
        <Link
          href={`/boutique/${product.category}`}
          className="hover:text-gold transition-colors"
        >
          {getCategoryName(product.category)}
        </Link>
        <span className="mx-2 text-gold/30">/</span>
        <span className="text-black-brand">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ivory-dark">
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <ProductPlaceholder label={product.name} size="lg" />
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && <Badge variant="new">Nouveau</Badge>}
            {product.originalPrice && <Badge variant="sale">Promo</Badge>}
          </div>
        </div>

        <div>
          <h1 className="font-display text-4xl font-bold text-black-brand mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-gold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-muted leading-relaxed mb-8">
            {product.description}
          </p>

          <ProductDetailClient product={product} />

          <div className="mt-8 pt-8 border-t border-ivory-dark">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-black-brand">Livraison</p>
                <p className="text-muted">
                  Dakar : 24-48h · Autres villes : 3-5 jours
                </p>
              </div>
              <div>
                <p className="font-medium text-black-brand">Paiement</p>
                <p className="text-muted">Wave · Orange Money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
