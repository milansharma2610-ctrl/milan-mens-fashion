import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Banknote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TrustTicker: React.FC = () => {
  const items = [
    { icon: Sparkles, text: '100% Combed Compact Cotton' },
    { icon: RotateCcw, text: '7-Day Hassle-Free Exchange' },
    { icon: Truck, text: 'Dispatched in 24 Hours (NCR Hub)' },
    { icon: Banknote, text: 'Cash on Delivery Available' },
    { icon: ShieldCheck, text: 'Zero Compromise On Fabric Weight' },
    { icon: CheckCircle2, text: 'Official Brand: milanworld.online' },
  ];

  return (
    <div className="bg-brand-900 border-y border-brand-800 py-3 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 mx-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-300"
            >
              <Icon className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{item.text}</span>
              <span className="text-zinc-600 ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
