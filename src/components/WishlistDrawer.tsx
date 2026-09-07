import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    setQuickViewProduct,
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-brand-950 border-l border-brand-800 h-full flex flex-col justify-between shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-brand-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display">
              Saved Vault ({wishlistProducts.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-brand-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 rounded-2xl bg-brand-900/60 border border-brand-800/80"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsWishlistOpen(false);
                  }}
                  className="w-18 h-22 sm:w-20 sm:h-24 object-cover rounded-xl bg-brand-950 shrink-0 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsWishlistOpen(false);
                        }}
                        className="text-xs sm:text-sm font-bold text-white line-clamp-1 cursor-pointer hover:text-brand-gold transition-colors"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">{product.tagline}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs sm:text-sm font-bold text-white font-mono">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-zinc-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, product.sizes[0] || 'M', product.colors[0]?.name || 'Standard', 1);
                      toggleWishlist(product.id);
                    }}
                    className="mt-2 py-1.5 px-3 rounded-lg bg-white hover:bg-brand-gold text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Move to Cart</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center mx-auto text-zinc-500">
                <Heart className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-base font-bold text-white font-display">No Favorites Saved</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Tap the heart icon on any drop to save pieces to your personal wishlist.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-brand-800 bg-brand-950">
          <button
            onClick={() => {
              setIsWishlistOpen(false);
              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3 rounded-xl bg-brand-gold hover:bg-brand-bronze text-brand-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Streetwear Drops</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
