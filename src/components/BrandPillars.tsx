import React from 'react';
import { Sparkles, RotateCcw, Lock, Truck } from 'lucide-react';

export const BrandPillars: React.FC = () => {
  return (
    <section className="bg-brand-black text-white py-12 px-6 sm:px-10 border-y border-neutral-800" data-purpose="brand-pillars">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        {/* Pillar 1 */}
        <div className="flex items-start gap-3">
          <div className="text-brand-gold mt-0.5">
            <Sparkles className="w-6 h-6 stroke-[1.2]" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider font-serif">Tuscan Leathers</h4>
            <p className="text-[10px] sm:text-xs text-neutral-400 font-light mt-1 font-sans">French boxcalf &amp; reverse suedes</p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="flex items-start gap-3">
          <div className="text-brand-gold mt-0.5">
            <RotateCcw className="w-6 h-6 stroke-[1.2]" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider font-serif">Free Size Exchanges</h4>
            <p className="text-[10px] sm:text-xs text-neutral-400 font-light mt-1 font-sans">Guaranteed perfect fit worldwide</p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="flex items-start gap-3">
          <div className="text-brand-gold mt-0.5">
            <Lock className="w-6 h-6 stroke-[1.2]" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider font-serif">Goodyear Longevity</h4>
            <p className="text-[10px] sm:text-xs text-neutral-400 font-light mt-1 font-sans">100% re-soleable for a lifetime</p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="flex items-start gap-3">
          <div className="text-brand-gold mt-0.5">
            <Truck className="w-6 h-6 stroke-[1.2]" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider font-serif">Global Express</h4>
            <p className="text-[10px] sm:text-xs text-neutral-400 font-light mt-1 font-sans">Direct from Marche, Italy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
