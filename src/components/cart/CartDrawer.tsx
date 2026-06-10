"use client";

import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { formatPrice, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ProductPlaceholder from "@/components/ui/ProductPlaceholder";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal } =
    useCartStore();

  const subtotal = getSubtotal();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/60 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-ivory-dark">
          <h2 className="font-display text-xl font-bold text-black-brand flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold" />
            Mon Panier
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-ivory-dark rounded-full transition-colors text-muted"
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-muted-light mb-4" />
            <p className="text-muted mb-6">Votre panier est vide</p>
            <Link href="/boutique" onClick={closeCart}>
              <Button variant="outline" className="w-full">
                Découvrir la boutique
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  className="flex gap-4 bg-white rounded-2xl p-4 border border-ivory-dark"
                >
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    {item.product.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProductPlaceholder size="sm" showLogo={false} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-black-brand text-sm truncate">
                      {item.product.name}
                    </h3>
                    {(item.selectedColor || item.selectedSize) && (
                      <p className="text-xs text-muted mt-1">
                        {[item.selectedColor, item.selectedSize]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                    <p className="text-gold font-semibold mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-ivory rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedColor,
                              item.selectedSize
                            )
                          }
                          className="p-1.5 hover:bg-ivory-dark rounded-full"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
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
                          className="p-1.5 hover:bg-ivory-dark rounded-full"
                        >
                          <Plus size={14} />
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
                        className="p-1.5 text-red-400 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ivory-dark p-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-black-brand">Sous-total</span>
                <span className="text-gold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted text-center">
                Frais de livraison calculés à la commande
              </p>
              <Link href="/commande" onClick={closeCart} className="block">
                <Button className="w-full" size="lg">
                  Passer la commande
                </Button>
              </Link>
              <Link href="/panier" onClick={closeCart} className="block">
                <Button className="w-full" variant="outline">
                  Voir le panier
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
