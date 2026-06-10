"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-black-brand mb-3">
        Contactez-nous
      </h1>
      <p className="text-muted mb-12 max-w-lg">
        Une question sur un produit, une commande ou la livraison ? Notre équipe
        est là pour vous aider.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="text-gold" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-black-brand">Adresse</h3>
              <p className="text-muted mt-1">
                Sacré Coeur 3, AUCHAN
                <br />
                Dakar, Sénégal
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="text-gold" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-black-brand">Téléphone</h3>
              <a
                href="tel:+221777454747"
                className="text-gold hover:underline mt-1 block"
              >
                (+221) 77 745 47 47
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="text-gold" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-black-brand">Email</h3>
              <a
                href="mailto:contact@nabylaa.com"
                className="text-gold hover:underline mt-1 block"
              >
                contact@nabylaa.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="text-gold" size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-black-brand">Horaires</h3>
              <p className="text-muted mt-1">
                Lun - Sam : 9h00 - 20h00
                <br />
                Dimanche : 10h00 - 18h00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-ivory-dark">
          {submitted ? (
            <p className="text-center text-gold font-medium text-lg py-12">
              Merci ! Nous vous répondrons dans les plus brefs délais.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <input
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ivory-dark focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ivory-dark focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-ivory-dark focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Envoyer
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
