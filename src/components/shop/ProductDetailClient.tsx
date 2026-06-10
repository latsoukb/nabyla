"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCartStore } from "@/lib/store/cart";
import Button from "@/components/ui/Button";
import { ShoppingBag, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const [color, setColor] = useState(product.colors[0] ?? "");
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleAddToCart = () => {
    addItem(product, quantity, color, size);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 800);
  };

  return (
    <div className="space-y-6">
      {product.colors.length > 0 && (
        <div>
          <p className="font-medium text-black-brand mb-3">Couleur</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={cn(
                  "px-4 py-2 rounded-full border-2 text-sm transition-all",
                  color === c
                    ? "border-gold bg-gold text-black-brand"
                    : "border-ivory-dark hover:border-gold/50"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes.length > 0 && (
        <div>
          <p className="font-medium text-black-brand mb-3">Taille</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  "w-12 h-12 rounded-xl border-2 text-sm font-medium transition-all",
                  size === s
                    ? "border-gold bg-gold text-black-brand"
                    : "border-ivory-dark hover:border-gold/50"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="font-medium text-black-brand mb-3">Quantité</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border border-ivory-dark flex items-center justify-center hover:bg-ivory-dark transition-colors"
          >
            -
          </button>
          <span className="text-lg font-medium w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border border-ivory-dark flex items-center justify-center hover:bg-ivory-dark transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full gap-2"
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {added ? (
          <>
            <Check size={20} />
            Ajouté au panier !
          </>
        ) : (
          <>
            <ShoppingBag size={20} />
            {product.inStock ? "Ajouter au panier" : "Rupture de stock"}
          </>
        )}
      </Button>
    </div>
  );
}
