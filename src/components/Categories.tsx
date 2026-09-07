import React from 'react';
import { CATEGORIES_DATA } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight } from 'lucide-react';
import { Category } from '../types';

export const Categories: React.FC = () => {
  const { setCategory, filters } = useShop();

  const handleSelectCategory = (id: string) => {
    setCategory(id as Category);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-brand-950 border-b border-brand-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-widest font-mono mb-2">
              <span>Curated Vault</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-display text-white">
              Featured Categories
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Engineered silhouettes made with heavy GSM fabrics, custom hardware, and ergonomic cuts. Select your aesthetic.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = filters.category === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  isSelected
                    ? 'border-brand-gold ring-2 ring-brand-gold/30'
                    : 'border-brand-800/80 hover:border-brand-700'
                }`}
              >
                {/* Image background with aspect ratio */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-brand-900 relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                      {cat.itemCount}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-brand-gold group-hover:text-black text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-gold transition-colors font-display">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{cat.subtext}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
