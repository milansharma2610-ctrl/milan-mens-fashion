import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setCategory } = useShop();

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    setCategory('all');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLookbook = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-brand-black text-white min-h-[580px] lg:min-h-[640px] flex flex-col justify-end overflow-hidden" data-purpose="editorial-hero">
      {/* Dark Cinematic Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Tailored Menswear Model in Milan"
          className="w-full h-full object-cover object-top opacity-55 scale-105 transition-transform duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2NORj69KBM2ulf-ua1pWGEZzbiC_sk_YrCcDXjnxl1sxYlLp-Whzao4623pJWxfxbZUymgwa_GHNE0m-HY2f2kr995w3DysgGpzsaalZ6HFPtd5WGWL5qkTlbtdKfQ70jVCaJvmnfslHbzwiKGsvl26yDqr349TwaRyrtOFuOfU6XkgZ6yBriee4T5Ip9zEu3Hs-yLB3psTwV0cWADmB8XXCyX5twcFy0A5QX9bR5JVGsTXDn02Eg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20"></div>
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 p-6 sm:p-12 pb-10 max-w-lg">
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-gold mb-2">
          Timeless Luxury For The Contemporary Man
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight leading-[1.05] mb-2">
          Define Your <span className="font-bold block">Signature.</span>
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-stone-300 font-normal mb-3">
          Crafted for the Modern Gentleman
        </p>
        <p className="text-xs text-stone-300/80 font-light leading-relaxed max-w-sm mb-6 font-sans">
          Curated sartorial essentials engineered in Northern Italy for the discerning man who values precision over quantity.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 font-sans">
          <a
            onClick={handleExplore}
            href="#catalog"
            className="bg-brand-gold hover:bg-brand-sand text-black font-semibold uppercase text-xs tracking-widest px-6 py-3.5 text-center flex items-center justify-center gap-2 transition duration-300 cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
          </a>
          <a
            onClick={handleLookbook}
            href="#about-story"
            className="border border-white/40 hover:border-white text-white font-medium uppercase text-xs tracking-widest px-6 py-3.5 text-center transition duration-300 cursor-pointer"
          >
            View Lookbook →
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[9px] uppercase tracking-widest text-neutral-400 font-sans">
          <span>SS-26 Runway Edition</span>
          <span className="text-brand-gold">Milano • Roma • Paris</span>
        </div>
      </div>
    </section>
  );
};
