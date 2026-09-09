import React from 'react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Heart } from 'lucide-react';

export const NewArrivals: React.FC = () => {
  const { isInWishlist, toggleWishlist, setQuickViewProduct } = useShop();

  const newItems = PRODUCTS.filter((p) => p.isNew);

  return (
    <section className="py-12 px-4 sm:px-8 bg-white" data-purpose="new-arrivals">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-stone-500 block mb-1">Just Dropped</span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider font-bold text-black">
              New Arrivals
            </h2>
          </div>
          <a
            className="text-[11px] uppercase tracking-widest text-black font-medium hover:underline flex items-center gap-1"
            href="#catalog"
          >
            View All →
          </a>
        </div>

        {/* Horizontal Smooth Swipe Track for Mobile / Grid on larger screens */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible">
          {newItems.map((product) => {
            const isFav = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="min-w-[190px] sm:min-w-[220px] max-w-[240px] lg:max-w-none flex-shrink-0 snap-start group"
              >
                <div className="relative bg-neutral-100 aspect-[3/4] mb-3 overflow-hidden border border-neutral-200 cursor-pointer">
                  <span className="absolute top-2 left-2 bg-black text-white text-[8px] font-semibold tracking-wider px-1.5 py-0.5 uppercase z-10 font-sans">
                    NEW
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    aria-label="Save to wishlist"
                    className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-black hover:bg-white z-10 shadow-sm transition-colors"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 stroke-[1.5] ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-black'
                      }`}
                    />
                  </button>
                  <img
                    onClick={() => setQuickViewProduct(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.images[0]}
                  />
                </div>

                <h4
                  onClick={() => setQuickViewProduct(product)}
                  className="text-xs font-medium uppercase tracking-wider line-clamp-1 text-black cursor-pointer hover:text-brand-gold transition-colors"
                >
                  {product.name}
                </h4>
                <p className="text-xs font-semibold text-neutral-800 mt-1 font-mono">${product.price}</p>

                {/* Color Variants */}
                <div className="flex items-center gap-1.5 mt-2">
                  {product.colors.map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
