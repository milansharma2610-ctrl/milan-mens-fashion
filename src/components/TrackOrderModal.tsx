import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Search, Package, Truck, CheckCircle2, Clock } from 'lucide-react';

export const TrackOrderModal: React.FC = () => {
  const { isTrackOrderOpen, setIsTrackOrderOpen } = useShop();
  const [query, setQuery] = useState('');
  const [tracked, setTracked] = useState(false);

  if (!isTrackOrderOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setTracked(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-brand-950 border border-brand-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl animate-slide-up relative">
        <div className="flex items-center justify-between pb-4 border-b border-brand-800">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-brand-gold" />
            <h3 className="text-lg font-bold text-white uppercase font-display">Track Your Order</h3>
          </div>
          <button
            onClick={() => {
              setIsTrackOrderOpen(false);
              setTracked(false);
              setQuery('');
            }}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-brand-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleTrack} className="mt-5 space-y-3">
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Order ID or Registered Phone Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. MW-849201 or 7895499065"
              className="flex-1 bg-brand-900 border border-brand-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-brand-gold font-mono uppercase"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-brand-gold text-brand-950 font-bold text-xs uppercase tracking-wider hover:bg-brand-bronze transition-colors flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" />
              <span>Track</span>
            </button>
          </div>
        </form>

        {tracked && (
          <div className="mt-6 p-4 rounded-2xl bg-brand-900/70 border border-brand-800 space-y-4 animate-fade-in">
            <div className="flex justify-between items-center text-xs pb-3 border-b border-brand-800">
              <span className="text-zinc-400">Order: <strong className="text-white font-mono">{query.toUpperCase()}</strong></span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                IN TRANSIT (ON TIME)
              </span>
            </div>

            {/* Timeline */}
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-white">Footwear Inspected, Conditioned &amp; Packed</p>
                  <p className="text-[11px] text-zinc-400">Hub: Rajnagar Extension, Ghaziabad</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-brand-gold">
                <Truck className="w-4 h-4 mt-0.5 shrink-0 animate-pulse" />
                <div>
                  <p className="font-bold text-white">Handed Over to Courier Partner (Delhivery/Bluedart)</p>
                  <p className="text-[11px] text-zinc-400">Air Cargo Transit to Destination City Hub</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-zinc-500">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-400">Out for Doorstep Delivery</p>
                  <p className="text-[11px] text-zinc-500">Estimated within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
