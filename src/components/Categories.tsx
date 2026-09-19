import React from 'react';
import { CATEGORIES_DATA } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Category } from '../types';

export const Categories: React.FC = () => {
  const { setCategory } = useShop();

  const handleCategoryClick = (catId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCategory(catId as Category);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 px-4 sm:px-8 bg-brand-black text-white" data-purpose="featured-categories">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-brand-gold block mb-1">Curation</span>
            <h2 className="font-serif text-2xl uppercase tracking-wider font-semibold">Featured Footwear</h2>
          </div>
          <button
            onClick={(e) => handleCategoryClick('all', e)}
            className="text-[11px] uppercase tracking-widest text-brand-sand hover:text-white flex items-center gap-1 transition-colors"
          >
            View All <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Categories Grid (2 cols mobile, 4 cols desktop with luxury cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {CATEGORIES_DATA.map((cat) => (
            <a
              key={cat.id}
              onClick={(e) => handleCategoryClick(cat.id, e)}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer block"
              href="#catalog"
            >
              <img
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                src={cat.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider font-serif text-white">
                  {cat.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-neutral-400 font-light line-clamp-1 mt-0.5">
                  {cat.subtext}
                </p>
                <span className="inline-block mt-2 text-brand-gold text-xs font-medium tracking-wider group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
