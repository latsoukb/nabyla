export const metadata = {
  title: "Livraison & Retours | Nabylaa By Hijab Store",
};

export default function LivraisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-black-brand mb-8">
        Livraison & Retours
      </h1>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold text-black-brand mb-3">
            Livraison
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-black-brand">Dakar :</strong> Livraison en
              24-48h — 2 000 FCFA (gratuite dès 50 000 FCFA)
            </li>
            <li>
              <strong className="text-black-brand">Thiès, Rufisque :</strong> 2-3
              jours — 3 500 FCFA
            </li>
            <li>
              <strong className="text-black-brand">Autres régions :</strong> 3-5
              jours — 5 000 FCFA
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-black-brand mb-3">
            Retours & Échanges
          </h2>
          <p>
            Vous disposez de 7 jours après réception pour retourner un article
            non porté, avec étiquettes. Les frais de retour sont à la charge du
            client, sauf en cas de produit défectueux.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-black-brand mb-3">
            Paiement
          </h2>
          <p>
            Nous acceptons Wave et Orange Money pour un paiement rapide et
            sécurisé. Le paiement à la livraison est également disponible sur
            demande.
          </p>
        </section>
      </div>
    </div>
  );
}
