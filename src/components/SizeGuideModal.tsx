import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, Sparkles, CheckCircle2 } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'inches' | 'cm'>('cm');

  if (!isSizeGuideOpen) return null;

  const shoeSizingData = [
    { us: 'US 7', uk: 'UK 6', eu: 'EU 40', length: unit === 'cm' ? '25.0 cm' : '9.8"' },
    { us: 'US 7.5', uk: 'UK 6.5', eu: 'EU 40.5', length: unit === 'cm' ? '25.4 cm' : '10.0"' },
    { us: 'US 8', uk: 'UK 7', eu: 'EU 41', length: unit === 'cm' ? '25.8 cm' : '10.2"' },
    { us: 'US 8.5', uk: 'UK 7.5', eu: 'EU 42', length: unit === 'cm' ? '26.3 cm' : '10.4"' },
    { us: 'US 9', uk: 'UK 8', eu: 'EU 42.5', length: unit === 'cm' ? '26.7 cm' : '10.5"' },
    { us: 'US 9.5', uk: 'UK 8.5', eu: 'EU 43', length: unit === 'cm' ? '27.1 cm' : '10.7"' },
    { us: 'US 10', uk: 'UK 9', eu: 'EU 44', length: unit === 'cm' ? '27.5 cm' : '10.8"' },
    { us: 'US 10.5', uk: 'UK 9.5', eu: 'EU 44.5', length: unit === 'cm' ? '28.0 cm' : '11.0"' },
    { us: 'US 11', uk: 'UK 10', eu: 'EU 45', length: unit === 'cm' ? '28.4 cm' : '11.2"' },
    { us: 'US 11.5', uk: 'UK 10.5', eu: 'EU 45.5', length: unit === 'cm' ? '28.8 cm' : '11.3"' },
    { us: 'US 12', uk: 'UK 11', eu: 'EU 46', length: unit === 'cm' ? '29.2 cm' : '11.5"' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-brand-black border border-neutral-800 w-full max-w-2xl p-6 sm:p-8 shadow-2xl animate-slide-up relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-gold/15 text-brand-gold flex items-center justify-center rounded">
              <Ruler className="w-4 h-4 stroke-[1.2]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif uppercase tracking-wider text-white font-bold">
                Footwear Sizing Matrix &amp; Conversion
              </h3>
              <p className="text-[11px] text-neutral-400">Handcrafted Italian lasts &amp; bespoke cordwainer fits</p>
            </div>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.2]" />
          </button>
        </div>

        {/* Unit Toggle & Guarantee */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between my-5 gap-3">
          <div className="flex items-center gap-2 text-xs text-brand-gold">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-wider text-neutral-300">
              100% Free Size Exchange If Fit Isn't Perfect
            </span>
          </div>
          <div className="flex border border-neutral-700 bg-neutral-900">
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 text-xs uppercase font-medium transition-all ${
                unit === 'cm' ? 'bg-brand-gold text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Centimeters (cm)
            </button>
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 text-xs uppercase font-medium transition-all ${
                unit === 'inches' ? 'bg-brand-gold text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Inches (in)
            </button>
          </div>
        </div>

        {/* Sizing Table */}
        <div className="overflow-x-auto border border-neutral-800 bg-neutral-900/60 mb-5">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 font-mono uppercase bg-neutral-900 text-[10px]">
                <th className="py-2.5 px-3">US Size</th>
                <th className="py-2.5 px-3">UK Equivalent</th>
                <th className="py-2.5 px-3">EU Size</th>
                <th className="py-2.5 px-3">Foot Length</th>
                <th className="py-2.5 px-3">Recommended Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 font-medium text-neutral-200">
              {shoeSizingData.map((row) => (
                <tr key={row.us} className="hover:bg-neutral-800/40">
                  <td className="py-2 px-3 font-bold text-brand-gold font-mono">{row.us}</td>
                  <td className="py-2 px-3 text-neutral-300">{row.uk}</td>
                  <td className="py-2 px-3 text-neutral-300">{row.eu}</td>
                  <td className="py-2 px-3 font-mono text-neutral-200">{row.length}</td>
                  <td className="py-2 px-3 text-[11px] text-neutral-400">Standard D Width</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring & Fit Advice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="p-3.5 bg-neutral-900 border border-neutral-800">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              How To Measure Foot Length
            </h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Place a sheet of paper flat on the floor against a wall. Stand upright with your heel touching the wall. Mark the tip of your longest toe, then measure from the edge of the paper to the mark.
            </p>
          </div>

          <div className="p-3.5 bg-neutral-900 border border-neutral-800">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Cordwainer Fit Tips
            </h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              • <strong>Loafers:</strong> If between sizes, choose half-size down for snug unlined heel grip.<br />
              • <strong>Sneakers &amp; Boots:</strong> True to size. Memory foam insole compresses to mold to your arch.
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full py-3 bg-brand-gold text-black font-semibold uppercase tracking-widest text-xs hover:bg-brand-sand transition-colors"
          >
            Return to Shoe Atelier
          </button>
        </div>
      </div>
    </div>
  );
};
