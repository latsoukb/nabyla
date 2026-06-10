import CheckoutForm from "@/components/checkout/CheckoutForm";

export const metadata = {
  title: "Commande | Nabylaa By Hijab Store",
  description: "Finalisez votre commande avec Wave ou Orange Money",
};

export default function CommandePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-black-brand mb-8">
        Finaliser ma commande
      </h1>
      <CheckoutForm />
    </div>
  );
}
