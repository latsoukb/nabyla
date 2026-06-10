"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice, assetPath } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart";
import Badge from "@/components/ui/Badge";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1, product.colors[0], product.sizes[0]);
    openCart();
  };

  return (
    <Link href={`/produit/${product.slug}`} className="group">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ivory-dark group-hover:border-gold/30 transition-colors mb-4">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={assetPath(product.image)}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProductPlaceholder label={product.name} size="md" />
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge variant="new">Nouveau</Badge>}
          {product.originalPrice && <Badge variant="sale">Promo</Badge>}
        </div>
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 w-9 h-9 bg-black-brand/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-gold"
          aria-label="Ajouter aux favoris"
        >
          <Heart size={16} />
        </button>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 left-3 bg-gold text-black-brand py-2.5 rounded-full flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-sm font-medium tracking-wide"
        >
          <ShoppingBag size={16} />
          Ajouter au panier
        </button>
      </div>
      <div>
        <h3 className="font-medium text-black-brand group-hover:text-gold transition-colors tracking-wide">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gold font-semibold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-muted text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
