import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  CreditCard,
  Banknote,
  QrCode,
  CheckCircle2,
  ArrowRight,
  Truck,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ShippingAddress, OrderConfirmation } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    finalTotal,
    clearCart,
    orderConfirmation,
    setOrderConfirmation,
  } = useShop();

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');

  // Address State
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: '',
    phone: '',
    email: '',
    addressLine: '',
    landmark: '',
    city: '',
    state: 'Uttar Pradesh',
    pincode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'UPI' | 'CARD'>('UPI');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.fullName || !address.phone || !address.addressLine || !address.pincode) {
      alert('Please fill all required shipping fields');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrderId = `MMF-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderConfirmation = {
        orderId: generatedOrderId,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        items: [...cart],
        subtotal: cartSubtotal,
        discount: discountAmount,
        shipping: shippingFee,
        grandTotal: finalTotal,
        shippingAddress: { ...address },
        paymentMethod,
      };

      setOrderConfirmation(order);
      setIsProcessing(false);
      setStep('success');
      clearCart();

      // Fire victory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 1200);
  };

  const generateWhatsAppMessage = (order: OrderConfirmation) => {
    const text = `*New Order Placed on Milan Men's Fashion (milanworld.online)*\n\n` +
      `*Order ID:* ${order.orderId}\n` +
      `*Customer:* ${order.shippingAddress.fullName}\n` +
      `*Phone:* ${order.shippingAddress.phone}\n` +
      `*Delivery Address:* ${order.shippingAddress.addressLine}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}\n\n` +
      `*Items:* \n` +
      order.items
        .map((i) => `• ${i.product.name} (Size: ${i.selectedSize}, Qty: ${i.quantity}) - ₹${i.product.price * i.quantity}`)
        .join('\n') +
      `\n\n*Payment Method:* ${order.paymentMethod}\n` +
      `*Grand Total:* ₹${order.grandTotal}\n\n` +
      `Please confirm dispatch from Rajnagar Extension, Ghaziabad hub.`;

    return `https://wa.me/917895499065?text=${encodeURIComponent(text)}`;
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-brand-950 border border-brand-800 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl animate-slide-up relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-800 mb-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-gold font-semibold">
              Checkout & Express Fulfillment
            </span>
            <h3 className="text-xl font-black text-white uppercase font-display">
              {step === 'success' ? 'Order Confirmed!' : 'Secure Express Checkout'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-brand-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: Shipping Details Form */}
        {step === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={address.fullName}
                  onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                  placeholder="e.g. Milan Sharma"
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Phone Number (for SMS & WhatsApp Tracking) *
                </label>
                <input
                  type="tel"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  placeholder="e.g. 7895499065"
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Email Address (for Digital Invoice)
              </label>
              <input
                type="email"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
                placeholder="e.g. milansharma2610@gmail.com"
                className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Complete Street Address (Flat / House No / Street) *
              </label>
              <input
                type="text"
                required
                value={address.addressLine}
                onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
                placeholder="e.g. Flat 402, Tower B, Rajnagar Extension"
                className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  placeholder="Ghaziabad"
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  State
                </label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  placeholder="Uttar Pradesh"
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Pincode *
                </label>
                <input
                  type="text"
                  required
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  placeholder="201017"
                  className="w-full bg-brand-900 border border-brand-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold font-mono"
                />
              </div>
            </div>

            {/* Total summary mini pill */}
            <div className="p-3.5 rounded-2xl bg-brand-900/60 border border-brand-800/80 flex items-center justify-between mt-2">
              <span className="text-xs text-zinc-400">
                Fulfilling <strong className="text-white">{cart.length} unique items</strong>
              </span>
              <span className="text-sm font-black text-brand-gold font-mono">
                Total: ₹{finalTotal.toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-bronze text-brand-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Continue to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Payment Selection */}
        {step === 'payment' && (
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Select Payment Method:
              </p>

              {/* UPI Option */}
              <label
                onClick={() => setPaymentMethod('UPI')}
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'UPI'
                    ? 'border-brand-gold bg-brand-900/90 ring-1 ring-brand-gold'
                    : 'border-brand-800 bg-brand-900/40 hover:border-brand-700'
                }`}
              >
                <QrCode className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Instant UPI & QR Code</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      FASTEST
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Google Pay, PhonePe, Paytm, BHIM, CRED
                  </p>
                </div>
              </label>

              {/* COD Option */}
              <label
                onClick={() => setPaymentMethod('COD')}
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'COD'
                    ? 'border-brand-gold bg-brand-900/90 ring-1 ring-brand-gold'
                    : 'border-brand-800 bg-brand-900/40 hover:border-brand-700'
                }`}
              >
                <Banknote className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-sm font-bold text-white">Cash on Delivery (COD)</span>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Pay in cash or QR when the parcel arrives at your doorstep.
                  </p>
                </div>
              </label>

              {/* Card Option */}
              <label
                onClick={() => setPaymentMethod('CARD')}
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'CARD'
                    ? 'border-brand-gold bg-brand-900/90 ring-1 ring-brand-gold'
                    : 'border-brand-800 bg-brand-900/40 hover:border-brand-700'
                }`}
              >
                <CreditCard className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-sm font-bold text-white">Credit / Debit Card / Netbanking</span>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Visa, Mastercard, RuPay, Netbanking encrypted checkout.
                  </p>
                </div>
              </label>
            </div>

            {/* Delivery Summary Banner */}
            <div className="p-4 rounded-2xl bg-brand-900 border border-brand-800 text-xs space-y-1 text-zinc-300">
              <div className="flex items-center gap-1.5 text-brand-gold font-semibold">
                <Truck className="w-4 h-4" />
                <span>Express Courier Dispatch: Bluedart / Delhivery</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Delivering to: <strong className="text-white">{address.fullName}</strong>, {address.addressLine}, {address.city} ({address.pincode})
              </p>
            </div>

            {/* Back & Pay buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="py-3.5 px-5 rounded-xl bg-brand-900 border border-brand-800 text-zinc-400 hover:text-white text-xs font-bold uppercase"
              >
                Back
              </button>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePlaceOrder}
                className="flex-1 py-3.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-bronze text-brand-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-gold/15"
              >
                {isProcessing ? (
                  <span>Generating Order Token...</span>
                ) : (
                  <span>Place Order (₹{finalTotal.toLocaleString()})</span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Placed Success */}
        {step === 'success' && orderConfirmation && (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center mx-auto text-brand-gold">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <h4 className="text-2xl font-black text-white font-display uppercase tracking-tight">
                Order Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-md mx-auto">
                Thank you for dropping with Milan Men's Fashion. Your order has been registered and is being prepped for dispatch.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-brand-900/80 border border-brand-800 rounded-2xl p-5 text-left text-xs space-y-3 font-mono">
              <div className="flex justify-between border-b border-brand-800 pb-2">
                <span className="text-zinc-400 font-sans">Order Identifier:</span>
                <span className="text-brand-gold font-bold">{orderConfirmation.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">Date:</span>
                <span className="text-white">{orderConfirmation.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">Payment Method:</span>
                <span className="text-white font-bold">{orderConfirmation.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-t border-brand-800 pt-2 text-sm font-bold">
                <span className="font-sans">Grand Total:</span>
                <span className="text-brand-gold">₹{orderConfirmation.grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* WhatsApp Integration Button */}
            <div className="space-y-2">
              <a
                href={generateWhatsAppMessage(orderConfirmation)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order Receipt to WhatsApp (+91 7895499065)</span>
              </a>
              <p className="text-[11px] text-zinc-500">
                You will also receive instant SMS tracking updates on {orderConfirmation.shippingAddress.phone}.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs"
            >
              Continue Shopping Vault
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
