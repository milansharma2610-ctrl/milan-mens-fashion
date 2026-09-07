import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Eye, Star, Flame, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInWishlist, toggleWishlist, setQuickViewProduct } = useShop();

  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>(
    product.sizes[0] || 'M'
  );
  const selectedColor = product.colors[0]?.name || 'Standard';
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const isFavorite = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-brand-900/60 rounded-2xl overflow-hidden border border-brand-800/80 hover:border-brand-700 hover:shadow-xl transition-all duration-300"
    >
      {/* Top Image Container */}
      <div
        onClick={() => setQuickViewProduct(product)}
        className="relative aspect-[3/4] w-full overflow-hidden bg-brand-950 cursor-pointer"
      >
        {/* Primary & Hover Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isLimitedEdition && (
            <span className="px-2.5 py-1 rounded-md bg-brand-gold text-brand-950 text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 fill-brand-950" />
              Limited Vault
            </span>
          )}
          {product.isNewDrop && !product.isLimitedEdition && (
            <span className="px-2.5 py-1 rounded-md bg-white text-black text-[10px] font-black uppercase tracking-wider shadow-md">
              New Drop
            </span>
          )}
          {product.stockLeft <= 4 && (
            <span className="px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[9px] font-bold tracking-wide">
              Only {product.stockLeft} Left
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-white transition-all hover:scale-110"
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-zinc-300'
            }`}
          />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-full py-2 px-3 rounded-xl bg-black/80 backdrop-blur-md hover:bg-black text-white text-xs font-bold tracking-wider uppercase border border-white/10 flex items-center justify-center gap-1.5 transition-all shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View & Specs</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Rating & Fabric GSM Pill */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">{product.rating}</span>
              <span className="text-[11px] text-zinc-500">({product.reviewCount})</span>
            </div>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-brand-850 text-zinc-400 border border-brand-800">
              {product.fabricSpecs.gsm.split(' ')[0]} GSM
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-sm sm:text-base font-bold text-white hover:text-brand-gold transition-colors cursor-pointer line-clamp-1 font-display"
          >
            {product.name}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">{product.tagline}</p>

          {/* Price Row */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-base sm:text-lg font-extrabold text-white">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-zinc-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">
              {product.discountPercentage}% OFF
            </span>
          </div>
        </div>

        {/* Size Selection Pills */}
        <div className="space-y-2 pt-1 border-t border-brand-800/60">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>Select Size:</span>
            <span className="text-zinc-500 font-mono">Fit: {product.fabricSpecs.fit.split(' ')[0]}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-7 h-7 text-xs font-semibold rounded-lg flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-brand-gold text-brand-950 font-extrabold shadow-sm'
                      : 'bg-brand-850 hover:bg-brand-800 text-zinc-300 border border-brand-700/60'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {/* Quick Add Button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`w-full mt-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              addedAnimation
                ? 'bg-emerald-500 text-white'
                : 'bg-white hover:bg-brand-gold text-black hover:text-brand-950'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Quick Add ({selectedSize})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
