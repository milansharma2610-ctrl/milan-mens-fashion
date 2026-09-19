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
      {/* Dark Cinematic Footwear Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Handcrafted Italian Leather Shoes in Milan"
          className="w-full h-full object-cover object-center opacity-55 scale-105 transition-transform duration-1000"
          src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1600&q=85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/30"></div>
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 p-6 sm:p-12 pb-10 max-w-lg">
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-gold mb-2">
          Handcrafted Italian Cordwainers • Marche &amp; Milano
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight leading-[1.05] mb-2">
          Walk With <span className="font-bold block">Distinction.</span>
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-stone-300 font-normal mb-3">
          Master Cordwainers SS-26 Footwear Collection
        </p>
        <p className="text-xs text-stone-300/80 font-light leading-relaxed max-w-sm mb-6 font-sans">
          Goodyear-welted dress shoes, artisanal Tuscan suede loafers, and hand-stitched luxury court trainers engineered for gentlemen who value lasting presence over transient trends.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 font-sans">
          <a
            onClick={handleExplore}
            href="#catalog"
            className="bg-brand-gold hover:bg-brand-sand text-black font-semibold uppercase text-xs tracking-widest px-6 py-3.5 text-center flex items-center justify-center gap-2 transition duration-300 cursor-pointer shadow-lg"
          >
            <span>Explore Footwear</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
          </a>
          <a
            onClick={handleLookbook}
            href="#about-story"
            className="border border-white/40 hover:border-white text-white font-medium uppercase text-xs tracking-widest px-6 py-3.5 text-center transition duration-300 cursor-pointer"
          >
            Cordwainer Heritage →
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[9px] uppercase tracking-widest text-neutral-400 font-sans">
          <span>SS-26 Footwear Collection</span>
          <span className="text-brand-gold">Montegranaro • Milano • Paris</span>
        </div>
      </div>
    </section>
  );
};
