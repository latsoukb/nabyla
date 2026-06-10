import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface CatalogEmptyProps {
  title?: string;
  description?: string;
}

export default function CatalogEmpty({
  title = "Catalogue en préparation",
  description = "Les produits de cette catégorie seront ajoutés prochainement. En attendant, n'hésitez pas à nous contacter pour vos demandes.",
}: CatalogEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="relative w-24 h-24 mb-8 opacity-40">
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </div>
      <h2 className="font-display text-3xl font-bold text-black-brand mb-4">
        {title}
      </h2>
      <p className="text-muted max-w-md mb-8 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/contact">
          <Button>Nous contacter</Button>
        </Link>
        <Link href="/boutique">
          <Button variant="outline">Toutes les catégories</Button>
        </Link>
      </div>
    </div>
  );
}
