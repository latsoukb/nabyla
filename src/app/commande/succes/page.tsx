"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

function SuccesContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
      <h1 className="font-display text-3xl font-bold text-black-brand mb-4">
        Commande confirmée !
      </h1>
      <p className="text-muted mb-2">
        Merci pour votre achat. Votre paiement a été reçu avec succès.
      </p>
      {orderId && (
        <p className="text-sm text-muted mb-8">
          Numéro de commande :{" "}
          <span className="font-mono font-semibold text-black-brand">
            {orderId}
          </span>
        </p>
      )}
      <p className="text-sm text-muted mb-8">
        Vous recevrez un email de confirmation avec les détails de livraison.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/boutique">
          <Button>Continuer mes achats</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </div>
  );
}

export default function SuccesPage() {
  return (
    <Suspense>
      <SuccesContent />
    </Suspense>
  );
}
