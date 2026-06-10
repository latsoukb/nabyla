import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nabylaa By Hijab Store | Mode Modeste à Dakar",
  description:
    "Boutique en ligne de mode modeste à Dakar. Vêtements, hijabs, turbans, accessoires et beauté. Paiement Wave et Orange Money. Livraison au Sénégal.",
  keywords: [
    "hijab",
    "mode modeste",
    "Dakar",
    "Sénégal",
    "turban",
    "abaya",
    "Nabylaa",
  ],
  openGraph: {
    title: "Nabylaa By Hijab Store",
    description: "La touche qui fait la différence — Mode modeste à Dakar",
    locale: "fr_SN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-ivory">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
