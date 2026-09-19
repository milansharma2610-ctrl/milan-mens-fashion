import React from 'react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setCategory, setIsTrackOrderOpen, setIsSizeGuideOpen } = useShop();

  return (
    <footer className="bg-[#080808] text-neutral-400 text-xs border-t border-neutral-900 pt-12 pb-24 lg:pb-16 px-6 sm:px-12" data-purpose="mobile-footer">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Brand Brief */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h4 className="font-serif text-2xl tracking-[0.25em] font-bold uppercase text-white">
              MILANWORLD
            </h4>
            <p className="text-[10px] tracking-widest text-brand-gold uppercase mt-0.5 font-sans font-medium">
              Calzaturificio • Artigiani Calzolai • Milano
            </p>
            <p className="text-xs text-neutral-500 font-light mt-2 max-w-sm font-sans">
              Master handcrafted Italian footwear engineered with Goodyear welted leathers, Tuscan suedes, and anatomical support for world-class discerning gentlemen.
            </p>
          </div>

          <div className="text-left md:text-right font-sans text-xs text-neutral-400 space-y-1">
            <p className="text-white font-mono">Hub: Rajnagar Extension, Ghaziabad, UP</p>
            <p>Shoe Concierge Support: <a href="tel:+917895499065" className="text-brand-gold hover:underline font-mono">+91 7895499065</a></p>
            <p><a href="mailto:milansharma2610@gmail.com" className="hover:text-white">milansharma2610@gmail.com</a></p>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-neutral-800/80 font-sans">
          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Footwear</h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button onClick={() => setCategory('all')} className="hover:text-white transition-colors">
                  All Footwear SS-26
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('loafers')} className="hover:text-white transition-colors">
                  Artisanal Loafers
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('sneakers')} className="hover:text-white transition-colors">
                  Luxury Sneakers
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('oxfords')} className="hover:text-white transition-colors">
                  Bespoke Oxfords
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('boots')} className="hover:text-white transition-colors">
                  Tuscan Boots
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('sandals')} className="hover:text-white transition-colors">
                  Resort Slides
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Client Concierge</h5>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => setIsTrackOrderOpen(true)} className="hover:text-white transition-colors">Track Footwear Shipment</button></li>
              <li><button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-white transition-colors">Footwear Sizing Matrix</button></li>
              <li><span className="text-neutral-500">Free Worldwide Size Exchanges</span></li>
              <li><span className="text-neutral-500">Re-Crafting &amp; Resoling Atelier</span></li>
              <li><a href="tel:+917895499065" className="hover:text-brand-gold transition-colors">Contact Shoe Concierge</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Ateliers</h5>
            <ul className="space-y-2 text-[11px] text-neutral-500">
              <li>Via Montenapoleone, Milano</li>
              <li>Montegranaro, Marche</li>
              <li>Piazza di Spagna, Roma</li>
              <li>Rue Saint-Honoré, Paris</li>
              <li>NCR Hub, Ghaziabad</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Craft &amp; Leather</h5>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#about-story" className="hover:text-white transition-colors">The Cordwainer Philosophy</a></li>
              <li><span className="text-neutral-500">Marche Tannery Archives</span></li>
              <li><span className="text-neutral-500">Goodyear Welting Secrets</span></li>
              <li><span className="text-neutral-500">Saphir Leather Care Guide</span></li>
            </ul>
          </div>
        </div>

        {/* Social and Localization */}
        <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-sans">
          <span className="uppercase tracking-wider text-neutral-400">
            Currency: <strong className="text-white">USD ($)</strong> / Global Express
          </span>
          <div className="flex space-x-6 uppercase tracking-widest text-white">
            <a className="hover:text-brand-gold transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="hover:text-brand-gold transition-colors" href="#">GQ Footwear</a>
            <a className="hover:text-brand-gold transition-colors" href="https://wa.me/917895499065" target="_blank" rel="noopener noreferrer">WhatsApp Shoe Atelier</a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-6 border-t border-neutral-900 text-center text-[9px] text-neutral-600 tracking-wider font-sans">
          <p>© 2026 MILANWORLD CALZATURIFICIO S.P.A. ALL RIGHTS RESERVED.</p>
          <p className="mt-1">Montegranaro • Milano • Florence • Paris • New York • Tokyo</p>
        </div>
      </div>
    </footer>
  );
};
