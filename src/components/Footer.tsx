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
              Sartoria Maschile • Milano
            </p>
            <p className="text-xs text-neutral-500 font-light mt-2 max-w-sm font-sans">
              Quiet luxury essentials engineered with master Italian tailoring techniques for world-class discerning gentlemen.
            </p>
          </div>

          <div className="text-left md:text-right font-sans text-xs text-neutral-400 space-y-1">
            <p className="text-white font-mono">Hub: Rajnagar Extension, Ghaziabad, UP</p>
            <p>Direct Atelier Support: <a href="tel:+917895499065" className="text-brand-gold hover:underline font-mono">+91 7895499065</a></p>
            <p><a href="mailto:milansharma2610@gmail.com" className="hover:text-white">milansharma2610@gmail.com</a></p>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-neutral-800/80 font-sans">
          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Shop</h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button onClick={() => setCategory('all')} className="hover:text-white transition-colors">
                  New In SS-26
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('shirts')} className="hover:text-white transition-colors">
                  Shirts &amp; Polos
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('casuals')} className="hover:text-white transition-colors">
                  Trousers &amp; Chinos
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('outerwear')} className="hover:text-white transition-colors">
                  Outerwear &amp; Field
                </button>
              </li>
              <li>
                <button onClick={() => setCategory('business')} className="hover:text-white transition-colors">
                  Business Essentials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Client Concierge</h5>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => setIsTrackOrderOpen(true)} className="hover:text-white transition-colors">Track Shipment</button></li>
              <li><button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-white transition-colors">Bespoke Fitting Guide</button></li>
              <li><span className="text-neutral-500">Complimentary Shipping $150+</span></li>
              <li><span className="text-neutral-500">14-Day Atelier Returns</span></li>
              <li><a href="tel:+917895499065" className="hover:text-brand-gold transition-colors">Contact Concierge</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Ateliers</h5>
            <ul className="space-y-2 text-[11px] text-neutral-500">
              <li>Via Montenapoleone, Milano</li>
              <li>Piazza di Spagna, Roma</li>
              <li>Rue Saint-Honoré, Paris</li>
              <li>Madison Avenue, New York</li>
              <li>NCR Hub, Ghaziabad</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-[11px] font-semibold uppercase tracking-widest mb-3">Editorial</h5>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#about-story" className="hover:text-white transition-colors">The Milanese Philosophy</a></li>
              <li><span className="text-neutral-500">Biella Wool Archives</span></li>
              <li><span className="text-neutral-500">Como Silk Preservation</span></li>
              <li><span className="text-neutral-500">Private Member Dispatches</span></li>
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
            <a className="hover:text-brand-gold transition-colors" href="#">Vogue Runway</a>
            <a className="hover:text-brand-gold transition-colors" href="https://wa.me/917895499065" target="_blank" rel="noopener noreferrer">WhatsApp Atelier</a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-6 border-t border-neutral-900 text-center text-[9px] text-neutral-600 tracking-wider font-sans">
          <p>© 2026 MILANWORLD MEN'S ATELIER S.P.A. ALL RIGHTS RESERVED.</p>
          <p className="mt-1">Milano • Florence • Paris • New York • Tokyo</p>
        </div>
      </div>
    </footer>
  );
};
