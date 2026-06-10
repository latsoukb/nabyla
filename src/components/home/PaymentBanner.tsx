export default function PaymentBanner() {
  return (
    <section className="py-20 bg-ivory border-y border-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-3">
            Paiement
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-black-brand mb-3">
            Simple et sécurisé
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Payez en toute confiance avec les moyens de paiement les plus
            utilisés au Sénégal
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <div className="bg-black-brand rounded-2xl p-6 flex items-center gap-5 border border-gold/10">
            <div className="w-14 h-14 bg-[#1DC8FF] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <h3 className="font-semibold text-gold text-lg">Wave</h3>
              <p className="text-ivory/50 text-sm">
                Paiement instantané via l&apos;app Wave
              </p>
            </div>
          </div>

          <div className="bg-black-brand rounded-2xl p-6 flex items-center gap-5 border border-gold/10">
            <div className="w-14 h-14 bg-[#FF6600] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">OM</span>
            </div>
            <div>
              <h3 className="font-semibold text-gold text-lg">Orange Money</h3>
              <p className="text-ivory/50 text-sm">
                Paiement sécurisé via Orange Money
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
