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

  const [address, setAddress] = useState<ShippingAddress>({
    fullName: '',
    phone: '',
    email: '',
    addressLine: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'UPI' | 'CARD'>('CARD');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.fullName || !address.phone || !address.addressLine || !address.pincode) {
      alert('Please fill all required address fields.');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrderId = `MW-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderConfirmation = {
        orderId: generatedOrderId,
        date: new Date().toLocaleDateString('en-US', {
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

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1000);
  };

  const generateWhatsAppMessage = (order: OrderConfirmation) => {
    const text = `*New Order Placed — MILANWORLD Calzaturificio (milanworld.online)*\n\n` +
      `*Order Identifier:* ${order.orderId}\n` +
      `*Patron Name:* ${order.shippingAddress.fullName}\n` +
      `*Contact:* ${order.shippingAddress.phone} | ${order.shippingAddress.email}\n` +
      `*Destination:* ${order.shippingAddress.addressLine}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}\n\n` +
      `*Footwear Selection:* \n` +
      order.items
        .map((i) => `• ${i.product.name} (Shoe Size: ${i.selectedSize}, Qty: ${i.quantity}) - $${i.product.price * i.quantity}`)
        .join('\n') +
      `\n\n*Payment Mode:* ${order.paymentMethod}\n` +
      `*Total Valuation:* $${order.grandTotal}\n\n` +
      `Dispatched via Marche & Milan Footwear Concierge Hub.`;

    return `https://wa.me/917895499065?text=${encodeURIComponent(text)}`;
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans">
      <div className="bg-brand-black border border-neutral-800 w-full max-w-xl p-6 sm:p-8 shadow-2xl animate-slide-up relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold font-mono">
              Bespoke Concierge Fulfillment
            </span>
            <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-wider text-white font-bold">
              {step === 'success' ? 'Atelier Order Confirmed' : 'Client Checkout'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5 stroke-[1.2]" />
          </button>
        </div>

        {/* STEP 1: Shipping Details */}
        {step === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={address.fullName}
                  onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                  placeholder="e.g. Milan Sharma"
                  className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  placeholder="7895499065"
                  className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                Email Address (for Certificate of Authenticity)
              </label>
              <input
                type="email"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
                placeholder="milansharma2610@gmail.com"
                className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                Delivery Address *
              </label>
              <input
                type="text"
                required
                value={address.addressLine}
                onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
                placeholder="Street address, Suite / Villa, Rajnagar Extension"
                className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  placeholder="Ghaziabad / Delhi"
                  className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                  State
                </label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  placeholder="Uttar Pradesh"
                  className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[10px] font-semibold text-neutral-300 uppercase tracking-widest mb-1.5">
                  Postal Code *
                </label>
                <input
                  type="text"
                  required
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  placeholder="201017"
                  className="w-full bg-neutral-900 border border-neutral-700 px-3.5 py-2.5 text-white placeholder-neutral-500 outline-none focus:border-brand-gold font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-neutral-900 border border-neutral-800 flex justify-between items-center text-xs mt-3">
              <span className="text-neutral-400">Items to fulfill: <strong className="text-white">{cart.length}</strong></span>
              <span className="text-brand-gold font-semibold font-mono text-sm">Total: ${finalTotal}</span>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3.5 bg-brand-gold hover:bg-brand-sand text-black font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <span>Continue to Payment Mode</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </form>
        )}

        {/* STEP 2: Payment */}
        {step === 'payment' && (
          <div className="space-y-4 text-xs">
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
              Select Settlement Preference:
            </p>

            <label
              onClick={() => setPaymentMethod('CARD')}
              className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-all ${
                paymentMethod === 'CARD'
                  ? 'border-brand-gold bg-neutral-900'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <CreditCard className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 stroke-[1.2]" />
              <div>
                <span className="text-sm font-semibold text-white">International Credit Card</span>
                <p className="text-[11px] text-neutral-400 mt-0.5">Visa, Mastercard, American Express (Encrypted 256-Bit SSL)</p>
              </div>
            </label>

            <label
              onClick={() => setPaymentMethod('UPI')}
              className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-all ${
                paymentMethod === 'UPI'
                  ? 'border-brand-gold bg-neutral-900'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <QrCode className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 stroke-[1.2]" />
              <div>
                <span className="text-sm font-semibold text-white">Direct UPI &amp; Netbanking</span>
                <p className="text-[11px] text-neutral-400 mt-0.5">Instant settlement via Google Pay, PhonePe, Paytm</p>
              </div>
            </label>

            <label
              onClick={() => setPaymentMethod('COD')}
              className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-all ${
                paymentMethod === 'COD'
                  ? 'border-brand-gold bg-neutral-900'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <Banknote className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 stroke-[1.2]" />
              <div>
                <span className="text-sm font-semibold text-white">Cash on Delivery (COD)</span>
                <p className="text-[11px] text-neutral-400 mt-0.5">Settle upon white-glove doorstep delivery</p>
              </div>
            </label>

            <div className="p-3 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-gold shrink-0 stroke-[1.2]" />
              <span>Complimentary global express dispatch via DHL / Bluedart</span>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="py-3 px-4 border border-neutral-700 text-neutral-400 hover:text-white uppercase text-xs tracking-wider font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePlaceOrder}
                className="flex-1 py-3 bg-brand-gold hover:bg-brand-sand text-black font-semibold text-xs uppercase tracking-widest transition-all"
              >
                {isProcessing ? 'Confirming with Atelier...' : `Place Atelier Order ($${finalTotal})`}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Success Confirmation */}
        {step === 'success' && orderConfirmation && (
          <div className="space-y-5 text-center py-2 font-sans">
            <div className="w-14 h-14 border border-brand-gold/50 flex items-center justify-center mx-auto text-brand-gold">
              <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
            </div>

            <div>
              <h4 className="font-serif text-2xl uppercase tracking-wider text-white font-bold">
                Order Registered With Atelier
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Thank you for your patronage, {orderConfirmation.shippingAddress.fullName}.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400 font-sans">Order Identifier:</span>
                <span className="text-brand-gold font-bold">{orderConfirmation.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 font-sans">Valuation:</span>
                <span className="text-white">${orderConfirmation.grandTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 font-sans">Payment Method:</span>
                <span className="text-white">{orderConfirmation.paymentMethod}</span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={generateWhatsAppMessage(orderConfirmation)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors block"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order Receipt to WhatsApp (+91 7895499065)</span>
              </a>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 border border-neutral-700 hover:border-white text-white font-semibold text-xs uppercase tracking-widest transition-colors"
            >
              Continue Exploring Atelier
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
