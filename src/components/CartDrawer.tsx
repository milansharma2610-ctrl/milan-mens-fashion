import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Truck,
  Tag,
  ShieldCheck,
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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-brand-950 border-l border-brand-800 h-full flex flex-col justify-between shadow-2xl animate-slide-up">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-brand-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-gold" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-display">
              Streetwear Bag ({cartCount})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-brand-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-brand-900/90 border-b border-brand-800 px-4 py-3 text-xs">
          <div className="flex items-center justify-between font-medium mb-1.5">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-brand-gold" />
              {isFreeShipping ? (
                <span className="text-emerald-400 font-bold">You unlocked Free Express Delivery!</span>
              ) : (
                <span>Add <strong className="text-white font-mono">₹{amountToFreeShipping.toLocaleString()}</strong> more for Free Delivery</span>
              )}
            </span>
            <span className="font-mono text-brand-gold font-bold">{progressPercent}%</span>
          </div>
          {/* Bar */}
          <div className="w-full h-1.5 bg-brand-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-gold to-amber-300 transition-all duration-500 rounded-full"
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
                className="flex gap-3 p-3 rounded-2xl bg-brand-900/60 border border-brand-800/80 group"
              >
                {/* Thumb */}
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-18 h-22 sm:w-20 sm:h-24 object-cover rounded-xl bg-brand-950 shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-zinc-400">
                      <span className="px-1.5 py-0.2 rounded bg-brand-800 text-brand-gold font-bold font-mono">
                        {item.selectedSize}
                      </span>
                      <span>•</span>
                      <span className="truncate">{item.selectedColor}</span>
                    </div>
                  </div>

                  {/* Quantity & Item Subtotal */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-800/60">
                    <div className="flex items-center rounded-lg bg-brand-850 border border-brand-700/60 overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)
                        }
                        className="px-2 py-0.5 text-zinc-400 hover:text-white text-xs font-bold"
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
                        className="px-2 py-0.5 text-zinc-400 hover:text-white text-xs font-bold"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs sm:text-sm font-bold text-white font-mono">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center mx-auto text-zinc-500">
                <ShoppingBag className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-base font-bold text-white font-display">Your Streetwear Bag is Empty</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Discover heavyweight drop-shoulder hoodies, raw cargo bottoms, and limited drops.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-3 px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold transition-colors"
              >
                Shop New Vault
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-brand-800 bg-brand-950 space-y-3">
            {/* Coupon Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      Coupon <strong className="font-mono text-white">{appliedCoupon.code}</strong> applied ({appliedCoupon.discountPercentage}% OFF)
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-zinc-400 hover:text-red-400 text-[11px] underline font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Discount code (e.g. MILAN10)"
                      className="w-full pl-8 pr-3 py-2 bg-brand-900 border border-brand-800 rounded-xl text-xs text-white placeholder-zinc-500 outline-none uppercase font-mono tracking-wider focus:border-brand-gold"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => applyCoupon(couponCode)}
                    className="px-4 py-2 rounded-xl bg-brand-850 hover:bg-brand-800 text-brand-gold font-bold text-xs uppercase border border-brand-700/60"
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
                className="text-[11px] text-zinc-400 hover:text-brand-gold underline underline-offset-2 flex items-center gap-1"
              >
                <span>{showNoteInput ? 'Hide order instructions' : '+ Add gift note or delivery instructions'}</span>
              </button>
              {showNoteInput && (
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Special instructions for delivery (e.g., call before delivery, leave with guard)..."
                  rows={2}
                  className="w-full mt-2 p-2.5 rounded-xl bg-brand-900 border border-brand-800 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold resize-none"
                />
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-zinc-400 border-t border-brand-850 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-zinc-200 font-mono">₹{cartSubtotal.toLocaleString()}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-emerald-400">
                  <span>Discount ({appliedCoupon.code})</span>
                  <span className="font-mono">-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Shipping</span>
                <span className="font-mono">
                  {isFreeShipping ? (
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">Free Delivery</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-brand-850">
                <span>Grand Total</span>
                <span className="text-brand-gold text-base font-mono">₹{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full py-3.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-bronze text-brand-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-gold/15 hover:scale-[1.01]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>Dispatched from Rajnagar Extension, Ghaziabad • COD & UPI</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
