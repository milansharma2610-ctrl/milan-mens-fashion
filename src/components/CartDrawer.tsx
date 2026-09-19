import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Truck,
  Tag,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    removeFromCart,
    updateQuantity,
    freeShippingThreshold,
    amountToFreeShipping,
    isFreeShipping,
    shippingFee,
    couponCode,
    setCouponCode,
    appliedCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    discountAmount,
    finalTotal,
    setIsCheckoutOpen,
  } = useShop();

  const [orderNote, setOrderNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round((cartSubtotal / freeShippingThreshold) * 100)
  );

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end font-sans">
      <div className="w-full max-w-md bg-brand-black border-l border-neutral-800 h-full flex flex-col justify-between shadow-2xl animate-slide-up">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-gold stroke-[1.2]" />
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest font-serif">
              Atelier Bag ({cartCount})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.2]" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-neutral-900/90 border-b border-neutral-800 px-4 py-3 text-xs">
          <div className="flex items-center justify-between font-medium mb-1.5">
            <span className="text-neutral-300 flex items-center gap-1.5 text-[11px]">
              <Truck className="w-4 h-4 text-brand-gold stroke-[1.2]" />
              {isFreeShipping ? (
                <span className="text-emerald-400 font-medium">Complimentary Express Shipping Unlocked</span>
              ) : (
                <span>Add <strong className="text-white font-mono">${amountToFreeShipping}</strong> more for Free Shipping</span>
              )}
            </span>
            <span className="font-mono text-brand-gold font-bold text-[11px]">{progressPercent}%</span>
          </div>
          <div className="w-full h-1 bg-neutral-800 overflow-hidden">
            <div
              className="h-full bg-brand-gold transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length > 0 ? (
            cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                className="flex gap-3 p-3 bg-neutral-900/60 border border-neutral-800 group"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-22 sm:w-20 sm:h-26 object-cover bg-black shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider line-clamp-1 font-serif">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-400">
                      <span className="px-1.5 py-0.2 bg-neutral-800 text-brand-gold font-medium font-mono text-[10px]">
                        {item.selectedSize}
                      </span>
                      <span>•</span>
                      <span className="truncate">{item.selectedColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-800/80">
                    <div className="flex items-center border border-neutral-700 bg-black">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)
                        }
                        className="px-2 py-0.5 text-neutral-400 hover:text-white text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="px-2.5 text-xs font-bold text-white font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)
                        }
                        className="px-2 py-0.5 text-neutral-400 hover:text-white text-xs font-bold"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                <ShoppingBag className="w-5 h-5 text-brand-gold stroke-[1.2]" />
              </div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest font-serif">
                Your Atelier Bag is Empty
              </h4>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto font-light">
                Discover handcrafted Goodyear-welted dress shoes, artisanal Tuscan loafers, and luxury sneakers.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-3 px-6 py-2.5 bg-brand-gold text-black text-xs font-semibold uppercase tracking-widest hover:bg-brand-sand transition-colors"
              >
                Explore Collection
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-800 bg-brand-black space-y-3">
            {/* Coupon Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 bg-neutral-900 border border-brand-gold/30 text-xs">
                  <div className="flex items-center gap-2 text-brand-sand font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>
                      Atelier Code <strong className="font-mono text-white">{appliedCoupon.code}</strong> applied ({appliedCoupon.discountPercentage}% OFF)
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-neutral-400 hover:text-red-400 text-[11px] underline font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Atelier code (e.g. MILAN10)"
                      className="w-full pl-8 pr-3 py-2 bg-neutral-900 border border-neutral-700 text-xs text-white placeholder-neutral-500 outline-none uppercase font-mono tracking-wider focus:border-brand-gold"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => applyCoupon(couponCode)}
                    className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-brand-gold font-semibold text-xs uppercase tracking-wider border border-neutral-700"
                  >
                    Apply
                  </button>
                </div>
              )}
              {couponError && (
                <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3 h-3" /> {couponError}
                </p>
              )}
            </div>

            {/* Optional Order Note */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowNoteInput(!showNoteInput)}
                className="text-[11px] text-neutral-400 hover:text-brand-gold underline underline-offset-2 flex items-center gap-1"
              >
                <span>{showNoteInput ? 'Hide concierge notes' : '+ Add gift message or delivery instructions'}</span>
              </button>
              {showNoteInput && (
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Special instructions for the Atelier Concierge..."
                  rows={2}
                  className="w-full mt-2 p-2.5 bg-neutral-900 border border-neutral-700 text-xs text-white placeholder-neutral-500 outline-none focus:border-brand-gold resize-none"
                />
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-400 border-t border-neutral-800 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-neutral-200 font-mono">${cartSubtotal}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-brand-sand">
                  <span>Privilege Savings ({appliedCoupon.code})</span>
                  <span className="font-mono">-${discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Courier Shipping</span>
                <span className="font-mono">
                  {isFreeShipping ? (
                    <span className="text-brand-gold uppercase text-[10px] tracking-wider font-semibold">Complimentary</span>
                  ) : (
                    `$${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-neutral-800">
                <span className="font-serif uppercase tracking-wider">Total</span>
                <span className="text-brand-gold font-mono">${finalTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full py-3.5 bg-brand-gold hover:bg-brand-sand text-black font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Proceed to Atelier Checkout</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
            </button>

            <div className="text-center text-[10px] text-neutral-500 uppercase tracking-widest pt-1">
              Encrypted 256-Bit SSL • Dispatched from Milan &amp; NCR Hub
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
