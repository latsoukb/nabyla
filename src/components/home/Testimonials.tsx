import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata D.",
    text: "Une boutique où l'on trouve de la qualité et du style. Le service est impeccable et la livraison rapide.",
    rating: 5,
  },
  {
    name: "Fatou S.",
    text: "Ma référence pour la mode modeste à Dakar. Des pièces élégantes et un accueil chaleureux en boutique.",
    rating: 5,
  },
  {
    name: "Mariama K.",
    text: "Nabylaa comprend vraiment les besoins des femmes. Une adresse incontournable à Sacré Coeur.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-3">
            Témoignages
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-black-brand">
            Ce que disent nos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-ivory-dark hover:border-gold/20 transition-colors"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-semibold text-black-brand tracking-wide">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
