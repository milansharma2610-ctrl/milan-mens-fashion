import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  ShoppingBag,
  Zap,
  Ruler,
  Truck,
  RotateCcw,
  Check,
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    setIsSizeGuideOpen,
    setIsCheckoutOpen,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'care' | 'shipping'>('specs');
  const [addedAnimation, setAddedAnimation] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setActiveImageIndex(0);
      setSelectedSize(quickViewProduct.sizes[0] || 'M');
      setSelectedColor(quickViewProduct.colors[0]?.name || 'Standard');
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans">
      <div className="bg-brand-black border border-neutral-800 w-full max-w-4xl overflow-hidden shadow-2xl animate-slide-up relative my-auto max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/70 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5 stroke-[1.2]" />
        </button>

        {/* Left: Image Gallery */}
        <div className="md:w-1/2 p-4 sm:p-6 bg-neutral-950 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-850">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-black border border-neutral-800">
            <img
              src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {quickViewProduct.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-18 border transition-all shrink-0 ${
                    activeImageIndex === idx ? 'border-brand-gold' : 'border-neutral-800 opacity-60'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] space-y-5">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold font-mono">
                  {quickViewProduct.category.toUpperCase()} • ATELIER
                </span>
                <div className="flex items-center gap-1 text-xs text-brand-gold">
                  <span>★★★★★</span>
                  <span className="text-neutral-400 font-sans text-[11px]">({quickViewProduct.reviewCount})</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-light uppercase text-white tracking-wide mt-1">
                {quickViewProduct.name}
              </h2>
              <p className="text-xs text-neutral-400 mt-1 font-light">{quickViewProduct.tagline}</p>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3 p-3 bg-neutral-900 border border-neutral-800">
              <span className="text-2xl font-serif font-bold text-white font-mono">
                ${quickViewProduct.price}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-xs text-neutral-500 line-through font-mono">
                  ${quickViewProduct.originalPrice}
                </span>
              )}
              {quickViewProduct.discountPercentage && (
                <span className="text-[10px] uppercase font-semibold text-brand-sand tracking-wider">
                  {quickViewProduct.discountPercentage}% Atelier Privilege
                </span>
              )}
            </div>

            {/* Color Options */}
            {quickViewProduct.colors.length > 0 && (
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-semibold text-neutral-300 uppercase tracking-wider text-[10px]">Atelier Tone:</span>
                  <span className="text-brand-gold font-medium text-[11px]">{selectedColor}</span>
                </div>
                <div className="flex gap-2">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border text-xs transition-all ${
                        selectedColor === c.name
                          ? 'border-brand-gold bg-neutral-900 text-white'
                          : 'border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-neutral-500"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector + Size Guide */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-neutral-300 uppercase tracking-widest text-[10px]">Select Fit:</span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1 text-brand-gold hover:text-white transition-colors text-[11px] underline underline-offset-4"
                >
                  <Ruler className="w-3.5 h-3.5 stroke-[1.2]" />
                  <span>Sartorial Sizing Guide</span>
                </button>
              </div>

              <div className="flex gap-2">
                {quickViewProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-2.5 text-xs uppercase transition-all font-semibold ${
                      selectedSize === size
                        ? 'bg-brand-gold text-black font-bold'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest">Quantity:</span>
              <div className="flex items-center border border-neutral-700 bg-neutral-900">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-neutral-400 hover:text-white text-xs font-bold"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-white font-mono">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(quickViewProduct.stockLeft, q + 1))}
                  className="px-3 py-1 text-neutral-400 hover:text-white text-xs font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`py-3.5 px-4 font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  addedAnimation
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white hover:bg-neutral-200 text-black'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 stroke-[1.2]" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="py-3.5 px-4 bg-brand-gold hover:bg-brand-sand text-black font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 fill-black" />
                <span>Instant Checkout</span>
              </button>
            </div>

            {/* Accordion */}
            <div className="border-t border-neutral-800 pt-4">
              <div className="flex border-b border-neutral-800 text-xs">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 mr-4 transition-colors uppercase tracking-wider text-[10px] ${
                    activeTab === 'specs' ? 'text-brand-gold font-bold border-b border-brand-gold' : 'text-neutral-400'
                  }`}
                >
                  Materials &amp; Provenance
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 mr-4 transition-colors uppercase tracking-wider text-[10px] ${
                    activeTab === 'care' ? 'text-brand-gold font-bold border-b border-brand-gold' : 'text-neutral-400'
                  }`}
                >
                  Garment Care
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 transition-colors uppercase tracking-wider text-[10px] ${
                    activeTab === 'shipping' ? 'text-brand-gold font-bold border-b border-brand-gold' : 'text-neutral-400'
                  }`}
                >
                  Concierge Delivery
                </button>
              </div>

              <div className="py-3 text-xs text-neutral-300 leading-relaxed font-light">
                {activeTab === 'specs' && (
                  <div className="space-y-1">
                    <p>• <strong>Composition:</strong> {quickViewProduct.fabricSpecs.material}</p>
                    <p>• <strong>Origin:</strong> {quickViewProduct.fabricSpecs.origin}</p>
                    <p>• <strong>Cut:</strong> {quickViewProduct.fabricSpecs.fit}</p>
                    <p className="pt-1 text-neutral-400">{quickViewProduct.description}</p>
                  </div>
                )}
                {activeTab === 'care' && (
                  <ul className="space-y-1 list-disc list-inside text-neutral-400">
                    {quickViewProduct.fabricSpecs.care.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <div className="space-y-2 text-neutral-400">
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Truck className="w-4 h-4 text-brand-gold stroke-[1.2]" />
                      <span>Complimentary express delivery on orders $150+</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <RotateCcw className="w-4 h-4 text-brand-gold stroke-[1.2]" />
                      <span>14-Day Milan Atelier Returns &amp; Exchanges worldwide</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
