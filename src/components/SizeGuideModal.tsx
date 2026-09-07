import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, Sparkles } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isSizeGuideOpen) return null;

  const sizingData = {
    inches: [
      { size: 'S', chest: '42"', length: '28"', shoulder: '21.5"', sleeve: '23.5"' },
      { size: 'M', chest: '44"', length: '29"', shoulder: '22.5"', sleeve: '24.0"' },
      { size: 'L', chest: '46"', length: '30"', shoulder: '23.5"', sleeve: '24.5"' },
      { size: 'XL', chest: '48"', length: '31"', shoulder: '24.5"', sleeve: '25.0"' },
      { size: 'XXL', chest: '50"', length: '32"', shoulder: '25.5"', sleeve: '25.5"' },
    ],
    cm: [
      { size: 'S', chest: '106 cm', length: '71 cm', shoulder: '55 cm', sleeve: '60 cm' },
      { size: 'M', chest: '112 cm', length: '74 cm', shoulder: '57 cm', sleeve: '61 cm' },
      { size: 'L', chest: '117 cm', length: '76 cm', shoulder: '60 cm', sleeve: '62 cm' },
      { size: 'XL', chest: '122 cm', length: '79 cm', shoulder: '62 cm', sleeve: '63.5 cm' },
      { size: 'XXL', chest: '127 cm', length: '81 cm', shoulder: '65 cm', sleeve: '65 cm' },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-brand-950 border border-brand-800 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl animate-slide-up relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">Streetwear Sizing Guide</h3>
              <p className="text-xs text-zinc-400">Tailored boxy & drop-shoulder fits</p>
            </div>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-brand-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center justify-between my-5">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Measurement Standard:
          </span>
          <div className="flex rounded-xl bg-brand-900 p-1 border border-brand-800">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                unit === 'inches' ? 'bg-brand-gold text-brand-950' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                unit === 'cm' ? 'bg-brand-gold text-brand-950' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Sizing Table */}
        <div className="overflow-x-auto rounded-xl border border-brand-800 bg-brand-900/60">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-brand-800 text-zinc-400 font-mono uppercase bg-brand-900">
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Chest</th>
                <th className="py-3 px-4">Body Length</th>
                <th className="py-3 px-4">Shoulder</th>
                <th className="py-3 px-4">Sleeve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-800/60 font-medium text-zinc-200">
              {sizingData[unit].map((row) => (
                <tr key={row.size} className="hover:bg-brand-850/60">
                  <td className="py-3 px-4 font-bold text-brand-gold">{row.size}</td>
                  <td className="py-3 px-4">{row.chest}</td>
                  <td className="py-3 px-4">{row.length}</td>
                  <td className="py-3 px-4">{row.shoulder}</td>
                  <td className="py-3 px-4">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fit Recommendation Note */}
        <div className="mt-5 p-3.5 rounded-2xl bg-brand-900 border border-brand-800/80 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-white">Designer Fit Advice:</strong> Our hoodies and tees are intentionally patterned with exaggerated drop shoulders and wide boxy torsos. For an authentic oversized streetwear drape, <span className="text-brand-gold">order your usual size</span>. For a regular standard fit, size down by one.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs"
          >
            Got It, Return to Product
          </button>
        </div>
      </div>
    </div>
  );
};
