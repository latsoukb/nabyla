# Nabylaa By Hijab Store

Site e-commerce moderne pour la boutique **Nabylaa By Hijab Store** à Dakar, Sénégal.

## Fonctionnalités

- Design moderne et élégant (mode modeste)
- Catalogue produits par catégories (Vêtements, Turbans, Hijabs, Accessoires, Beauté)
- Panier et checkout complet
- Paiement **Wave** et **Orange Money**
- Livraison au Sénégal
- Responsive (mobile, tablette, desktop)

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Paiements

### Mode démo (par défaut)

Les paiements sont simulés. Ajoutez des produits au panier, passez commande et testez Wave ou Orange Money.

### Mode production

1. Copiez `.env.example` vers `.env.local`
2. Définissez `PAYMENT_DEMO_MODE=false`
3. Configurez vos clés API :

**Wave Business API**
- Créez un compte marchand sur [business.wave.com](https://business.wave.com)
- Obtenez votre clé API et secret webhook
- Documentation : [Wave Business API](https://kolonell.com/en/blog/wave-business-api-website-integration-2026)

**Orange Money**
- Contactez Sonatel pour un compte marchand
- Obtenez `client_id`, `client_secret` et `merchant_key`
- Délai d'activation : 2-4 semaines

## Déploiement

### Vercel (recommandé)

```bash
npm i -g vercel
vercel
```

Configurez les variables d'environnement dans le dashboard Vercel.

### Autres plateformes

```bash
npm run build
npm start
```

## Prototype

Le catalogue est vide pour l'instant — les catégories sont en place, les produits seront ajoutés dans `src/lib/data/products.ts` avec vos vraies photos.

```ts
// Exemple pour ajouter un produit :
{
  id: "1",
  slug: "mon-produit",
  name: "Nom du produit",
  description: "Description...",
  price: 15000,
  category: "hijabs",
  image: "/products/mon-produit.jpg", // vos photos dans public/products/
  images: ["/products/mon-produit.jpg"],
  colors: ["Noir", "Beige"],
  sizes: ["Unique"],
  inStock: true,
}
```

## Structure

```
src/
├── app/              # Pages et routes API
├── components/       # Composants React
├── public/logo.png   # Logo Nabylaa
├── lib/
│   ├── data/         # Catalogue produits
│   ├── payment/      # Intégration Wave & Orange Money
│   └── store/        # État panier et commandes
```

## Contact boutique

- **Adresse :** Sacré Coeur 3, AUCHAN, Dakar
- **Téléphone :** (+221) 77 745 47 47
- **Email :** contact@nabylaa.com
