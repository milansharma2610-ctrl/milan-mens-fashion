import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const { setIsTrackOrderOpen, setIsSizeGuideOpen, setCategory } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.9 },
      });
    }
  };

  return (
    <footer className="bg-brand-950 border-t border-brand-850 pt-16 pb-24 lg:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Newsletter Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-brand-900 via-brand-850 to-brand-950 border border-brand-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase flex items-center justify-center md:justify-start gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              JOIN THE INNER CIRCLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mt-1">
              Unlock 10% Off Your First Drip
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Subscribe to get secret early access to limited heavyweight vault drops and exclusive discount codes.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-white font-bold">You're on the VIP list!</p>
                  <p className="text-[11px] text-zinc-400">Use coupon code <span className="font-mono text-brand-gold font-bold">MILAN10</span> at checkout.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-brand-950 border border-brand-700 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-brand-gold hover:bg-brand-bronze text-brand-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors flex items-center gap-1.5"
                >
                  <span>Claim</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Footer Navigation & Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-2xl font-black tracking-tighter uppercase font-display text-white">
                MILAN <span className="font-light text-zinc-400">MEN</span>
              </span>
              <p className="text-xs text-brand-gold font-mono tracking-widest mt-0.5">milanworld.online</p>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Milan Men's Fashion is an independent luxury streetwear label engineered in India. Crafting 400+ GSM heavyweight hoodies, vintage-washed oversized tees, and tactical utilitarian silhouettes.
            </p>
            <div className="flex gap-3 text-zinc-400">
              <a href="#" className="w-8 h-8 rounded-full bg-brand-900 hover:bg-brand-gold hover:text-black flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-900 hover:bg-brand-gold hover:text-black flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-900 hover:bg-brand-gold hover:text-black flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono">Collections</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setCategory('hoodies');
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-brand-gold transition-colors"
                >
                  Heavyweight Hoodies
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory('tees');
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-brand-gold transition-colors"
                >
                  Oversized Graphic Tees
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory('bottomwear');
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-brand-gold transition-colors"
                >
                  Modular Cargo Pants
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory('jackets');
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-brand-gold transition-colors"
                >
                  Melton Wool Varsity
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory('accessories');
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-brand-gold transition-colors"
                >
                  Caps & Tactical Slings
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Help & Tools */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsTrackOrderOpen(true)}
                  className="hover:text-brand-gold transition-colors"
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-brand-gold transition-colors"
                >
                  Size Guide & Fit Chart
                </button>
              </li>
              <li>
                <span className="text-zinc-500">Shipping & Exchange (7 Days)</span>
              </li>
              <li>
                <span className="text-zinc-500">Privacy & Terms of Service</span>
              </li>
              <li>
                <span className="text-zinc-500">Authenticity Guarantee</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono">Hub & Support</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Rajnagar Extension, Ghaziabad, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="tel:+917895499065"
                  className="text-white hover:text-brand-gold transition-colors font-mono font-semibold"
                >
                  +91 7895499065
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="mailto:milansharma2610@gmail.com"
                  className="text-white hover:text-brand-gold transition-colors break-all"
                >
                  milansharma2610@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="pt-8 border-t border-brand-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Milan Men's Fashion (milanworld.online). All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Encrypted 256-Bit SSL Checkout</span>
            <span>•</span>
            <span>UPI / COD / Cards Accepted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
