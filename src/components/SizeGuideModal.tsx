import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, Sparkles } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isSizeGuideOpen) return null;

  const sizingData = {
    inches: [
      { size: 'S', chest: '38"', length: '28"', shoulder: '17.5"', sleeve: '25.0"' },
      { size: 'M', chest: '40"', length: '29"', shoulder: '18.2"', sleeve: '25.5"' },
      { size: 'L', chest: '42"', length: '30"', shoulder: '19.0"', sleeve: '26.0"' },
      { size: 'XL', chest: '44"', length: '31"', shoulder: '19.8"', sleeve: '26.5"' },
      { size: 'XXL', chest: '46"', length: '32"', shoulder: '20.5"', sleeve: '27.0"' },
    ],
    cm: [
      { size: 'S', chest: '96 cm', length: '71 cm', shoulder: '44.5 cm', sleeve: '63.5 cm' },
      { size: 'M', chest: '102 cm', length: '74 cm', shoulder: '46.2 cm', sleeve: '64.8 cm' },
      { size: 'L', chest: '107 cm', length: '76 cm', shoulder: '48.3 cm', sleeve: '66.0 cm' },
      { size: 'XL', chest: '112 cm', length: '79 cm', shoulder: '50.3 cm', sleeve: '67.3 cm' },
      { size: 'XXL', chest: '117 cm', length: '81 cm', shoulder: '52.0 cm', sleeve: '68.5 cm' },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-brand-black border border-neutral-800 w-full max-w-xl p-6 sm:p-8 shadow-2xl animate-slide-up relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-gold/15 text-brand-gold flex items-center justify-center">
              <Ruler className="w-4 h-4 stroke-[1.2]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif uppercase tracking-wider text-white font-bold">
                Sartorial Sizing Guide
              </h3>
              <p className="text-[11px] text-neutral-400">Precision Italian tailoring &amp; structured fits</p>
            </div>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5 stroke-[1.2]" />
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center justify-between my-5">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
            Measurement Scale:
          </span>
          <div className="flex border border-neutral-700 bg-neutral-900">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 text-xs uppercase font-medium transition-all ${
                unit === 'inches' ? 'bg-brand-gold text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 text-xs uppercase font-medium transition-all ${
                unit === 'cm' ? 'bg-brand-gold text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Sizing Table */}
        <div className="overflow-x-auto border border-neutral-800 bg-neutral-900/60">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 font-mono uppercase bg-neutral-900 text-[10px]">
                <th className="py-2.5 px-3">Size</th>
                <th className="py-2.5 px-3">Chest</th>
                <th className="py-2.5 px-3">Length</th>
                <th className="py-2.5 px-3">Shoulder</th>
                <th className="py-2.5 px-3">Sleeve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 font-medium text-neutral-200">
              {sizingData[unit].map((row) => (
                <tr key={row.size} className="hover:bg-neutral-800/40">
                  <td className="py-2.5 px-3 font-bold text-brand-gold font-mono">{row.size}</td>
                  <td className="py-2.5 px-3">{row.chest}</td>
                  <td className="py-2.5 px-3">{row.length}</td>
                  <td className="py-2.5 px-3">{row.shoulder}</td>
                  <td className="py-2.5 px-3">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fit Advice */}
        <div className="mt-5 p-3.5 bg-neutral-900 border border-neutral-800 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-brand-gold shrink-0 mt-0.5 stroke-[1.2]" />
          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            <strong className="text-white font-medium">Master Tailor Advice:</strong> Our polos and shirts are tailored with modern European precision. Select your true size for an elegant silhouette beneath tailored jackets. If between sizes, order one size up.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full py-3 bg-brand-gold text-black font-semibold uppercase tracking-widest text-xs hover:bg-brand-sand transition-colors"
          >
            Return to Atelier Piece
          </button>
        </div>
      </div>
    </div>
  );
};
