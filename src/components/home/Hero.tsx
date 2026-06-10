"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-brand">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-medium mb-6">
              Mode Modeste · Dakar
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ivory leading-[1.1] mb-6">
              La touche qui{" "}
              <span className="text-gold-gradient">fait la différence</span>
            </h1>
            <p className="text-ivory/60 text-lg mb-10 leading-relaxed max-w-md">
              Vêtements, hijabs, turbans et accessoires sélectionnés avec soin.
              Élégance, qualité et individualité.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/boutique">
                <Button size="lg" className="gap-2">
                  Découvrir la boutique
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold/10"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border border-gold/20 rounded-full" />
              <div className="absolute inset-4 border border-gold/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo
                  size="xl"
                  alt="Nabylaa By Hijab Store"
                  priority
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
