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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end font-sans">
      <div className="w-full max-w-md bg-brand-black border-l border-neutral-800 h-full flex flex-col justify-between shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-brand-gold fill-brand-gold stroke-[1.2]" />
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest font-serif">
              Saved Pieces ({wishlistProducts.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.2]" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 bg-neutral-900/60 border border-neutral-800"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsWishlistOpen(false);
                  }}
                  className="w-16 h-22 object-cover bg-black shrink-0 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsWishlistOpen(false);
                        }}
                        className="text-xs font-semibold text-white uppercase tracking-wider line-clamp-1 cursor-pointer hover:text-brand-gold transition-colors font-serif"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-neutral-400 line-clamp-1">{product.tagline}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-white font-mono">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-neutral-500 line-through font-mono">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, product.sizes[0] || 'M', product.colors[0]?.name || 'Standard', 1);
                      toggleWishlist(product.id);
                    }}
                    className="mt-2 py-1.5 px-3 bg-white hover:bg-brand-gold text-black text-[10px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3 stroke-[1.2]" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                <Heart className="w-5 h-5 text-neutral-400 stroke-[1.2]" />
              </div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest font-serif">
                No Saved Selections
              </h4>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto font-light">
                Save pieces to your personal atelier shortlist by tapping the heart icon on any garment.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-neutral-800 bg-brand-black">
          <button
            onClick={() => {
              setIsWishlistOpen(false);
              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-3 bg-brand-gold hover:bg-brand-sand text-black font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Atelier Collection</span>
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>
    </div>
  );
};
