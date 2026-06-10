import { PaymentMethod } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PaymentMethodsProps {
  selected: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethods({
  selected,
  onSelect,
}: PaymentMethodsProps) {
  const methods: {
    id: PaymentMethod;
    name: string;
    description: string;
    color: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "wave",
      name: "Wave",
      description: "Paiement instantané via l'application Wave",
      color: "#1DC8FF",
      icon: <span className="text-white font-bold text-lg">W</span>,
    },
    {
      id: "orange_money",
      name: "Orange Money",
      description: "Paiement sécurisé via Orange Money",
      color: "#FF6600",
      icon: <span className="text-white font-bold text-sm">OM</span>,
    },
  ];

  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <button
          key={method.id}
          type="button"
          onClick={() => onSelect(method.id)}
          className={cn(
            "w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left",
            selected === method.id
              ? "border-gold bg-gold/5"
              : "border-ivory-dark bg-white hover:border-gold/30"
          )}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: method.color }}
          >
            {method.icon}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-black-brand">{method.name}</p>
            <p className="text-sm text-muted">{method.description}</p>
          </div>
          {selected === method.id && (
            <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
              <Check size={14} className="text-black-brand" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
