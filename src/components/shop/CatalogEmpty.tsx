import Link from "next/link";
import Logo from "@/components/ui/Logo";
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
      <Logo size="lg" alt="" className="mb-8 opacity-40" />
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
