import Link from "next/link";
import { XCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function EchecPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <XCircle size={64} className="mx-auto text-red-500 mb-6" />
      <h1 className="font-display text-3xl font-bold text-black-brand mb-4">
        Paiement échoué
      </h1>
      <p className="text-muted mb-8">
        Le paiement n&apos;a pas pu être traité. Veuillez réessayer ou choisir
        un autre mode de paiement.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/commande">
          <Button>Réessayer</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Nous contacter</Button>
        </Link>
      </div>
    </div>
  );
}
