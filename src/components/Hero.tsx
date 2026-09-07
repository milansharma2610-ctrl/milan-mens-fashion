import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight, Sparkles, Flame, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setCategory } = useShop();

  const handleShopNewDrop = () => {
    setCategory('all');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreHoodies = () => {
    setCategory('hoodies');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-brand-950 pt-6 pb-16 lg:py-24 border-b border-brand-850">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900 border border-brand-700/80 text-xs font-semibold text-zinc-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              <span className="text-brand-gold uppercase tracking-wider font-mono text-[11px]">2026 DROP 01</span>
              <span className="text-zinc-500">•</span>
              <span>milanworld.online</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight font-display text-white leading-[1.05]">
                THE WINTER & <br />
                <span className="gold-gradient-text drop-shadow-sm">STREETWEAR</span> <br />
                VAULT.
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed pt-2">
                Heavyweight hoodies, relaxed fits, and crafted essentials designed for everyday confidence.
                Tailored for modern urban luxury with 400+ GSM French Terry and preshrunk compact cotton.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleShopNewDrop}
                className="px-7 py-4 rounded-xl bg-white text-black font-extrabold hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02] flex items-center gap-2 group text-sm uppercase tracking-wider"
              >
                <span>Shop New Drop</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-black" />
              </button>

              <button
                onClick={handleExploreHoodies}
                className="px-7 py-4 rounded-xl bg-brand-900 hover:bg-brand-850 text-white font-bold border border-brand-700 hover:border-brand-gold/60 transition-all flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <Flame className="w-4 h-4 text-brand-gold" />
                <span>Explore Hoodies</span>
              </button>
            </div>

            {/* Highlight Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg border-t border-brand-850/80">
              <div className="space-y-0.5">
                <span className="text-lg sm:text-xl font-black text-white font-display">420 GSM</span>
                <p className="text-[11px] text-zinc-400 font-medium">Ultra French Terry</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg sm:text-xl font-black text-brand-gold font-display">100%</span>
                <p className="text-[11px] text-zinc-400 font-medium">Combed Cotton</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg sm:text-xl font-black text-white font-display">24-HR</span>
                <p className="text-[11px] text-zinc-400 font-medium">NCR Dispatch</p>
              </div>
            </div>
          </div>

          {/* Right Visual Streetwear Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-700/60 shadow-2xl bg-brand-900 group">
                <img
                  src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop"
                  alt="Milan Men's Winter Vault Streetwear"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Floating Product Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured Piece
                    </span>
                    <h4 className="text-sm font-bold text-white">Vault Heavyweight Boxy Hoodie</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-base font-extrabold text-white">₹2,499</span>
                      <span className="text-xs text-zinc-400 line-through">₹4,499</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                        44% OFF
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleExploreHoodies}
                    className="p-3 rounded-xl bg-white text-black hover:bg-brand-gold transition-colors font-bold"
                    aria-label="View featured piece"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Decorative Accent Pill */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-brand-gold text-brand-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 rotate-3">
                <Flame className="w-3.5 h-3.5 fill-brand-950" />
                <span>Selling Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Prompt */}
      <div className="mt-12 flex justify-center">
        <a
          href="#categories"
          className="text-zinc-500 hover:text-zinc-300 transition-colors flex flex-col items-center gap-1 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px] font-semibold">Explore Categories</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
