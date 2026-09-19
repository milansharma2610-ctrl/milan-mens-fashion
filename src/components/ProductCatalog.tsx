import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Category } from '../types';
import { SlidersHorizontal, Check } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const {
    filters,
    setCategory,
    toggleSizeFilter,
    setSortBy,
    resetFilters,
    filteredProducts,
    addToCart,
    setQuickViewProduct,
  } = useShop();

  const [addedId, setAddedId] = useState<string | null>(null);
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Footwear' },
    { id: 'loafers', label: 'Artisanal Loafers' },
    { id: 'sneakers', label: 'Luxury Sneakers' },
    { id: 'oxfords', label: 'Bespoke Oxfords' },
    { id: 'boots', label: 'Tuscan Boots' },
    { id: 'sandals', label: 'Resort Slides' },
  ];

  const handleQuickAdd = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.sizes[0] || 'US 9', product.colors[0]?.name || 'Standard', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="catalog" className="py-12 px-4 sm:px-8 bg-[#f8f7f4]" data-purpose="best-sellers">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-neutral-500 block mb-1">
              Cordwainer Collection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider font-bold text-black">
              {filters.category === 'all' ? 'Footwear Icons & Vault' : categories.find(c => c.id === filters.category)?.label}
            </h2>
          </div>

          {/* Filter toggle & count */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 bg-white text-xs uppercase tracking-widest text-black hover:border-black transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter & Sort</span>
            </button>
            <span className="text-xs text-neutral-500 tracking-wider">
              ({filteredProducts.length} models)
            </span>
          </div>
        </div>

        {/* Filter bar (expandable) */}
        {showFiltersDrawer && (
          <div className="mb-6 p-4 bg-white border border-neutral-200 animate-slide-up space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-600 block mb-2">
                Footwear Category
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors border ${
                      filters.category === cat.id
                        ? 'bg-black text-white border-black font-medium'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-neutral-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Shoe Size:</span>
                {(['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'] as const).map((s) => {
                  const active = filters.selectedSizes.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => toggleSizeFilter(s)}
                      className={`px-2 py-1 text-xs font-semibold border ${
                        active
                          ? 'bg-brand-gold text-black border-brand-gold font-bold'
                          : 'bg-neutral-50 text-neutral-600 border-neutral-200'
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Sort:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-neutral-50 border border-neutral-300 text-xs px-2.5 py-1 text-black outline-none"
                >
                  <option value="featured">Featured Atelier</option>
                  <option value="newest">Newest Additions</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <button
                  onClick={resetFilters}
                  className="text-xs text-neutral-500 hover:text-black underline ml-2"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Responsive Grid: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white p-2.5 sm:p-3 border border-neutral-200/80 flex flex-col justify-between group hover:shadow-lg transition-shadow"
            >
              <div>
                <div
                  onClick={() => setQuickViewProduct(prod)}
                  className="relative aspect-[3/4] bg-neutral-100 mb-2.5 overflow-hidden cursor-pointer"
                >
                  <img
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={prod.images[0]}
                  />
                </div>
                <h4
                  onClick={() => setQuickViewProduct(prod)}
                  className="text-xs sm:text-sm font-semibold tracking-wide uppercase line-clamp-1 text-black cursor-pointer hover:text-brand-gold transition-colors font-sans"
                >
                  {prod.name}
                </h4>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-brand-gold my-1">
                  <span className="text-[10px]">★★★★★</span>
                  <span className="text-[9px] text-neutral-500 font-sans">({prod.reviewCount})</span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-black mb-2.5 font-mono">${prod.price}</p>
              </div>

              <button
                onClick={(e) => handleQuickAdd(prod, e)}
                className={`w-full py-2 text-[10px] tracking-wider uppercase font-medium transition-colors flex items-center justify-center gap-1 ${
                  addedId === prod.id
                    ? 'bg-emerald-700 text-white'
                    : 'bg-neutral-900 text-white hover:bg-black'
                }`}
              >
                {addedId === prod.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added +</span>
                  </>
                ) : (
                  <span>Add to Bag +</span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
