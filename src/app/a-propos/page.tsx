import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "À propos | Nabylaa By Hijab Store",
  description: "Découvrez l'histoire et la vision de Nabylaa By Hijab Store",
};

export default function AProposPage() {
  return (
    <div>
      <section className="relative py-28 bg-black-brand overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="relative w-28 h-28 mx-auto mb-8">
            <Image src="/logo.png" alt="Nabylaa" fill className="object-contain" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ivory mb-4">
            À propos de Nabylaa
          </h1>
          <p className="text-gold text-lg tracking-wide">
            La touche qui fait la différence
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="font-display text-3xl font-bold text-black-brand mb-6">
          Notre vision
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Chez Nabylaa, notre vision va bien au-delà de la mode. Elle
            englobe un engagement envers notre société et notre environnement.
            Nous nous engageons à créer une destination mode exclusive qui
            transcende l&apos;ordinaire.
          </p>
          <p>
            Notre passion pour le style, la qualité et l&apos;individualité est
            le moteur de notre mission. Notre collection est un mélange
            soigneusement sélectionné de classiques intemporels et des
            dernières tendances.
          </p>
          <p>
            Située au cœur de Dakar, à Sacré Coeur 3 près d&apos;AUCHAN, notre
            boutique physique et notre site en ligne offrent une expérience de
            magasinage fluide et agréable, avec des transactions sécurisées via
            Wave et Orange Money.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <p className="text-3xl font-bold text-gold font-display">5</p>
            <p className="text-sm text-muted mt-1">Catégories</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold font-display">Dakar</p>
            <p className="text-sm text-muted mt-1">Sacré Coeur 3</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold font-display">100%</p>
            <p className="text-sm text-muted mt-1">Qualité</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/boutique">
            <Button size="lg">Découvrir la boutique</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
