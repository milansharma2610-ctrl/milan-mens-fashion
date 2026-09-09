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
          alt="Tailoring Craftsmanship"
          className="w-full h-full object-cover opacity-35 scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiaqjAApDxHFjEvxJwPAPnLzERwfdjQQXgnTjODGqEAITwzq6Fp7xT8kgTtfl8M9Rzv-1eHgORrF1pghoR5ItJ4PR7FYZIV-iJ-2Zv7pSXV48TfqOPflBjmSeKrnKrlx3g4LlTZvqxmo-Jjrxn0W0hkPUI-1P1avQTkN_z2D3JsW3DjaFLhcKZdT-YhcM6UO0xyziyVn4nHh-4ccZjU803B3PCLLAG5UBgmPnkPJK15v7SU5scM-YU"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-sm sm:max-w-md">
        <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-semibold block mb-2 font-sans">
          Heritage Craft
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-wide leading-tight mb-3">
          Effortless Style. <span className="font-bold block">Every Day.</span>
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 font-light mb-6 leading-relaxed font-sans">
          Finest Egyptian cottons, Biella wools, and lightweight Como silks, tailored to honor the subtle majesty of Milanese design.
        </p>
        <button
          onClick={handleShop}
          className="inline-block bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-brand-sand transition duration-300 font-sans cursor-pointer"
        >
          Shop Collection →
        </button>
      </div>
    </section>
  );
};
