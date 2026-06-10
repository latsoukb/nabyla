export const metadata = {
  title: "Politique de confidentialité | Nabylaa By Hijab Store",
};

export default function ConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-black-brand mb-8">
        Politique de confidentialité
      </h1>

      <div className="space-y-6 text-muted leading-relaxed">
        <p>
          Nabylaa By Hijab Store s&apos;engage à protéger vos données
          personnelles. Les informations collectées (nom, email, téléphone,
          adresse) sont utilisées uniquement pour le traitement de vos commandes
          et la communication relative à votre achat.
        </p>
        <p>
          Nous ne partageons pas vos données avec des tiers, sauf nos
          partenaires de livraison et de paiement (Wave, Orange Money) dans le
          cadre strict du traitement de votre commande.
        </p>
        <p>
          Conformément à la réglementation en vigueur, vous disposez d&apos;un
          droit d&apos;accès, de rectification et de suppression de vos données.
          Contactez-nous à contact@nabylaa.com pour exercer ces droits.
        </p>
      </div>
    </div>
  );
}
