import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ArrowUpDown, X, RotateCcw } from 'lucide-react';
import { Category } from '../types';

export const ProductCatalog: React.FC = () => {
  const {
    filters,
    setCategory,
    toggleSizeFilter,
    setPriceRange,
    setSortBy,
    resetFilters,
    filteredProducts,
  } = useShop();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Vault' },
    { id: 'hoodies', label: 'Hoodies' },
    { id: 'tees', label: 'Oversized Tees' },
    { id: 'bottomwear', label: 'Cargos & Pants' },
    { id: 'jackets', label: 'Jackets' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[] = ['S', 'M', 'L', 'XL', 'XXL'];

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.selectedSizes.length > 0 ||
    filters.priceRange[0] > 999 ||
    filters.priceRange[1] < 4999 ||
    filters.searchQuery !== '';

  return (
    <section id="catalog" className="py-14 sm:py-18 bg-brand-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-gold">
              Live Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              Streetwear Catalog
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Showing <span className="text-white font-semibold">{filteredProducts.length}</span> curated silhouettes
            </p>
          </div>

          {/* Category Tabs for Desktop */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-brand-900 border border-brand-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  filters.category === cat.id
                    ? 'bg-brand-gold text-brand-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-brand-900/80 border border-brand-800/80 mb-8">
          {/* Left: Mobile Filter Button & Active Filter Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-850 hover:bg-brand-800 text-zinc-200 text-xs font-bold border border-brand-700/60"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-gold" />
              <span>Filters</span>
              {filters.selectedSizes.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-brand-gold text-black text-[10px] flex items-center justify-center font-bold">
                  {filters.selectedSizes.length}
                </span>
              )}
            </button>

            {/* Quick Size Filter Pills (Desktop) */}
            <div className="hidden sm:flex items-center gap-1 ml-2">
              <span className="text-xs text-zinc-500 mr-1">Size:</span>
              {sizes.map((s) => {
                const active = filters.selectedSizes.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggleSizeFilter(s)}
                    className={`w-7 h-7 rounded-md text-xs font-bold transition-colors ${
                      active
                        ? 'bg-brand-gold text-black'
                        : 'bg-brand-850 hover:bg-brand-800 text-zinc-400 border border-brand-700/50'
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            {/* Clear Filters Reset */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-brand-800 ml-2"
              >
                <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right: Sort Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-xs text-zinc-400 hidden sm:inline">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-brand-850 text-zinc-200 border border-brand-700/60 text-xs rounded-xl px-3 py-2 outline-none cursor-pointer hover:border-brand-600 focus:border-brand-gold"
            >
              <option value="featured">Featured Vault</option>
              <option value="newest">Newest Drops</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-sm bg-brand-950 border-l border-brand-800 h-full p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-brand-800">
                  <h3 className="text-lg font-bold text-white font-display">Refine Streetwear</h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1.5 text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Select */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                    Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`p-2 rounded-lg text-xs font-semibold text-left transition-colors ${
                          filters.category === cat.id
                            ? 'bg-brand-gold text-black'
                            : 'bg-brand-900 text-zinc-300 border border-brand-800 hover:border-brand-700'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes Filter */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                    Select Sizes
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => {
                      const active = filters.selectedSizes.includes(s);
                      return (
                        <button
                          key={s}
                          onClick={() => toggleSizeFilter(s)}
                          className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                            active
                              ? 'bg-brand-gold text-black shadow-md'
                              : 'bg-brand-900 text-zinc-300 border border-brand-800'
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-2">
                    <span className="uppercase tracking-wider font-semibold">Max Price</span>
                    <span className="text-white font-bold font-mono">₹{filters.priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="999"
                    max="4999"
                    step="200"
                    value={filters.priceRange[1]}
                    onChange={(e) => setPriceRange([999, Number(e.target.value)])}
                    className="w-full accent-brand-gold bg-brand-850 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                    <span>₹999</span>
                    <span>₹4,999</span>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-brand-800 space-y-2">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 rounded-xl bg-brand-gold text-brand-950 font-bold uppercase tracking-wider text-xs"
                >
                  Apply Filters ({filteredProducts.length} items)
                </button>
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      resetFilters();
                      setMobileFilterOpen(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-brand-900 text-zinc-400 hover:text-white text-xs font-semibold"
                  >
                    Reset All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="py-20 text-center bg-brand-900/40 rounded-3xl border border-brand-800/60 p-8">
            <div className="w-16 h-16 rounded-full bg-brand-850 flex items-center justify-center mx-auto mb-4 text-zinc-500">
              <SlidersHorizontal className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">No Streetwear Matches Found</h3>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto mt-2 mb-6">
              We couldn't find items matching your active filter criteria. Try adjusting the size, price range, or category.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 rounded-xl bg-brand-gold text-brand-950 font-bold text-xs uppercase tracking-wider hover:bg-brand-bronze transition-colors"
            >
              Reset Filters & Show All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
