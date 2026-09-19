import React from 'react';
import { useShop } from '../context/ShopContext';

export const EditorialInterstitial: React.FC = () => {
  const { setCategory } = useShop();

  const handleShop = (e: React.MouseEvent) => {
    e.preventDefault();
    setCategory('all');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative bg-brand-charcoal text-white py-16 sm:py-24 px-6 sm:px-12 overflow-hidden border-y border-brand-border"
      data-purpose="editorial-interstitial"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Master Italian Cordwainer Shoemaking Craft"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-sm sm:max-w-md">
        <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-semibold block mb-2 font-sans">
          Cordwainer Heritage
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-wide leading-tight mb-3">
          Centuries of Artistry. <span className="font-bold block">Engineered To Endure.</span>
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 font-light mb-6 leading-relaxed font-sans">
          From full-grain French boxcalf to velvet Tuscan suedes, each pair undergoes 120 meticulous steps of hand-lasting, Goodyear welting, and burnishing in the historic footwear valleys of Marche.
        </p>
        <button
          onClick={handleShop}
          className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-brand-sand transition duration-300 font-sans cursor-pointer"
        >
          Explore All Footwear →
        </button>
      </div>
    </section>
  );
};
