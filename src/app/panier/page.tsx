"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function PanierPage() {
  const { items, updateQuantity, removeItem, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-muted mb-6" />
        <h1 className="font-display text-2xl font-bold text-black-brand mb-4">
          Votre panier est vide
        </h1>
        <Link href="/boutique">
          <Button>Continuer mes achats</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl font-bold text-black-brand mb-8">
        Mon Panier ({items.length} article{items.length > 1 ? "s" : ""})
      </h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
              className="flex gap-6 bg-white rounded-2xl p-6 border border-ivory-dark"
            >
              <div className="relative w-24 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg text-black-brand">
                  {item.product.name}
                </h3>
                {(item.selectedColor || item.selectedSize) && (
                  <p className="text-sm text-muted mt-1">
                    {[item.selectedColor, item.selectedSize]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                <p className="text-gold font-semibold mt-2">
                  {formatPrice(item.product.price)}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-ivory rounded-full px-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1,
                          item.selectedColor,
                          item.selectedSize
                        )
                      }
                      className="p-2"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1,
                          item.selectedColor,
                          item.selectedSize
                        )
                      }
                      className="p-2"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      removeItem(
                        item.product.id,
                        item.selectedColor,
                        item.selectedSize
                      )
                    }
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                  >
                    <Trash2 size={16} />
                    Supprimer
                  </button>
                </div>
              </div>
              <p className="font-semibold text-black-brand hidden sm:block">
                {formatPrice(item.product.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-ivory-dark h-fit sticky top-28">
          <h2 className="font-display text-xl font-bold mb-6">Résumé</h2>
          <div className="flex justify-between mb-2">
            <span className="text-muted">Sous-total</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between mb-4 text-sm">
            <span className="text-muted">Livraison</span>
            <span className="text-muted">Calculée à la commande</span>
          </div>
          <div className="border-t border-ivory-dark pt-4 flex justify-between text-lg font-bold mb-6">
            <span>Total estimé</span>
            <span className="text-gold">{formatPrice(subtotal)}</span>
          </div>
          <Link href="/commande" className="block">
            <Button size="lg" className="w-full">
              Passer la commande
            </Button>
          </Link>
          <Link
            href="/boutique"
            className="block text-center text-sm text-gold mt-4 hover:underline"
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  );
}
