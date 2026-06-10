"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 bg-black-brand">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Mail className="w-10 h-10 text-gold mx-auto mb-5" />
        <h2 className="font-display text-4xl font-bold text-ivory mb-3">
          Restez informée
        </h2>
        <p className="text-ivory/50 mb-10">
          Inscrivez-vous pour être alertée dès l&apos;ouverture du catalogue en
          ligne.
        </p>

        {submitted ? (
          <p className="text-gold font-medium text-lg tracking-wide">
            Merci ! Vous serez parmi les premières informées.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-5 py-3 rounded-full border border-gold/20 bg-black-soft text-ivory placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
            <Button type="submit">S&apos;inscrire</Button>
          </form>
        )}
      </div>
    </section>
  );
}
