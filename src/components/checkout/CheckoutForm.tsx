"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import { PaymentMethod, ShippingInfo } from "@/lib/types";
import Button from "@/components/ui/Button";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import { Loader2 } from "lucide-react";

const SHIPPING_COST = 2000;
const FREE_SHIPPING_THRESHOLD = 50000;

export default function CheckoutForm() {
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();
  const subtotal = getSubtotal();
  const shippingCost =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shippingCost;

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("wave");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [shipping, setShipping] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Dakar",
    quartier: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          shipping,
          paymentMethod,
          subtotal,
          shippingCost,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de la commande");
      }

      const { orderId } = await response.json();

      const paymentEndpoint =
        paymentMethod === "wave"
          ? "/api/payment/wave"
          : "/api/payment/orange-money";

      const paymentResponse = await fetch(paymentEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount: total }),
      });

      if (!paymentResponse.ok) {
        throw new Error("Erreur lors de l'initialisation du paiement");
      }

      const { paymentUrl } = await paymentResponse.json();
      clearCart();
      router.push(paymentUrl);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted text-lg mb-4">
          Votre panier est vide
        </p>
        <Button onClick={() => router.push("/boutique")}>
          Retour à la boutique
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-black-brand mb-6">
            Informations de livraison
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black-brand mb-1">
                Prénom *
              </label>
              <input
                name="firstName"
                value={shipping.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black-brand mb-1">
                Nom *
              </label>
              <input
                name="lastName"
                value={shipping.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black-brand mb-1">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={shipping.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black-brand mb-1">
                Téléphone *
              </label>
              <input
                name="phone"
                type="tel"
                value={shipping.phone}
                onChange={handleChange}
                required
                placeholder="77 XXX XX XX"
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black-brand mb-1">
                Adresse *
              </label>
              <input
                name="address"
                value={shipping.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black-brand mb-1">
                Ville *
              </label>
              <select
                name="city"
                value={shipping.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                <option value="Dakar">Dakar</option>
                <option value="Thiès">Thiès</option>
                <option value="Saint-Louis">Saint-Louis</option>
                <option value="Kaolack">Kaolack</option>
                <option value="Ziguinchor">Ziguinchor</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black-brand mb-1">
                Quartier *
              </label>
              <input
                name="quartier"
                value={shipping.quartier}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black-brand mb-1">
                Notes (optionnel)
              </label>
              <textarea
                name="notes"
                value={shipping.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-ivory-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none"
                placeholder="Instructions de livraison..."
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-black-brand mb-6">
            Mode de paiement
          </h2>
          <PaymentMethods
            selected={paymentMethod}
            onSelect={setPaymentMethod}
          />
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl p-8 border border-ivory-dark sticky top-28">
          <h2 className="font-display text-2xl font-bold text-black-brand mb-6">
            Récapitulatif
          </h2>

          <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="flex justify-between text-sm"
              >
                <span className="text-muted">
                  {item.product.name} x{item.quantity}
                </span>
                <span className="font-medium">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-ivory-dark pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Sous-total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Livraison</span>
              <span>
                {shippingCost === 0 ? (
                  <span className="text-green-600 font-medium">Gratuite</span>
                ) : (
                  formatPrice(shippingCost)
                )}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-ivory-dark">
              <span>Total</span>
              <span className="text-gold">{formatPrice(total)}</span>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full mt-6"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Traitement...
              </>
            ) : paymentMethod === "wave" ? (
              "Payer avec Wave"
            ) : (
              "Payer avec Orange Money"
            )}
          </Button>

          <p className="text-xs text-muted text-center mt-4">
            Paiement 100% sécurisé. Vos données sont protégées.
          </p>
        </div>
      </div>
    </form>
  );
}
