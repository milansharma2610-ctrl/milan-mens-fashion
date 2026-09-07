import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Star,
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

  // Sync state when quickViewProduct changes
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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-brand-950 border border-brand-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-slide-up relative my-auto max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-zinc-300 hover:text-white flex items-center justify-center hover:bg-brand-900 transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Gallery */}
        <div className="md:w-1/2 p-4 sm:p-6 bg-brand-900/40 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-850">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-950 border border-brand-800">
            <img
              src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            {quickViewProduct.isLimitedEdition && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-brand-gold text-brand-950 text-xs font-black uppercase tracking-wider">
                Limited Vault
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {quickViewProduct.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-brand-gold scale-105'
                      : 'border-brand-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] space-y-6">
          <div className="space-y-4">
            {/* Tagline & Title */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold">
                  {quickViewProduct.category.toUpperCase()} • {quickViewProduct.fabricSpecs.gsm.split(' ')[0]} GSM
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{quickViewProduct.rating}</span>
                  <span className="text-zinc-500">({quickViewProduct.reviewCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display mt-1">
                {quickViewProduct.name}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">{quickViewProduct.tagline}</p>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3 p-3 rounded-2xl bg-brand-900/60 border border-brand-800/80">
              <span className="text-2xl font-black text-white">
                ₹{quickViewProduct.price.toLocaleString()}
              </span>
              <span className="text-sm text-zinc-500 line-through">
                ₹{quickViewProduct.originalPrice.toLocaleString()}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                Save ₹{(quickViewProduct.originalPrice - quickViewProduct.price).toLocaleString()} ({quickViewProduct.discountPercentage}% OFF)
              </span>
            </div>

            {/* Low Stock Notice */}
            {quickViewProduct.stockLeft <= 6 && (
              <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-2 rounded-xl font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Hurry! Only {quickViewProduct.stockLeft} units remaining in vault inventory.</span>
              </div>
            )}

            {/* Color Options */}
            {quickViewProduct.colors.length > 0 && (
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-semibold text-zinc-300 uppercase tracking-wider">Color:</span>
                  <span className="text-brand-gold font-medium">{selectedColor}</span>
                </div>
                <div className="flex gap-2">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedColor === c.name
                          ? 'border-brand-gold bg-brand-900 text-white'
                          : 'border-brand-800 text-zinc-400 hover:border-brand-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector + Size Guide Link */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-zinc-300 uppercase tracking-wider">Size:</span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1 text-brand-gold hover:text-white transition-colors font-medium underline underline-offset-4"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Chart (Inches / CM)</span>
                </button>
              </div>

              <div className="flex gap-2">
                {quickViewProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                      selectedSize === size
                        ? 'bg-brand-gold text-brand-950 font-black shadow-md'
                        : 'bg-brand-900 border border-brand-800 text-zinc-300 hover:border-brand-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Quantity:</span>
              <div className="flex items-center rounded-xl bg-brand-900 border border-brand-800 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-brand-850 text-sm font-bold"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-bold text-white font-mono">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(quickViewProduct.stockLeft, q + 1))}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-brand-850 text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs: Add to Bag & Buy Now */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  addedAnimation
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white hover:bg-zinc-200 text-black'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="py-3.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-bronze text-brand-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/10"
              >
                <Zap className="w-4 h-4 fill-brand-950" />
                <span>Buy Now (Instant)</span>
              </button>
            </div>

            {/* Accordion Tabs for Specs, Care, Shipping */}
            <div className="border-t border-brand-850 pt-4">
              <div className="flex border-b border-brand-800 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 mr-4 transition-colors relative ${
                    activeTab === 'specs' ? 'text-brand-gold font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Fabric & Specs
                  {activeTab === 'specs' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 mr-4 transition-colors relative ${
                    activeTab === 'care' ? 'text-brand-gold font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Wash Care
                  {activeTab === 'care' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'shipping' ? 'text-brand-gold font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Shipping & Exchange
                  {activeTab === 'shipping' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"></span>
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="py-3 text-xs text-zinc-300 leading-relaxed">
                {activeTab === 'specs' && (
                  <div className="space-y-1.5 font-medium">
                    <p>• <strong>Weight:</strong> {quickViewProduct.fabricSpecs.gsm}</p>
                    <p>• <strong>Composition:</strong> {quickViewProduct.fabricSpecs.composition}</p>
                    <p>• <strong>Silhouette:</strong> {quickViewProduct.fabricSpecs.fit}</p>
                    <p>• <strong>Origin:</strong> {quickViewProduct.fabricSpecs.origin}</p>
                    <p className="pt-1 text-zinc-400">{quickViewProduct.description}</p>
                  </div>
                )}
                {activeTab === 'care' && (
                  <ul className="space-y-1 list-disc list-inside text-zinc-400">
                    {quickViewProduct.fabricSpecs.care.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <div className="space-y-2 text-zinc-400">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Truck className="w-4 h-4 text-brand-gold" />
                      <span>Dispatched in 24 hours from Rajnagar Extension, Ghaziabad hub.</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <RotateCcw className="w-4 h-4 text-brand-gold" />
                      <span>7-Day Hassle-Free Size & Style Exchange available across India.</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">Free delivery on orders above ₹1,499. Cash on Delivery accepted.</p>
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
