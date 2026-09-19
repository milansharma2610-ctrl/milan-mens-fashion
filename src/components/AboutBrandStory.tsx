import React from 'react';

export const AboutBrandStory: React.FC = () => {
  return (
    <section id="about-story" className="py-14 sm:py-20 px-5 sm:px-10 bg-white" data-purpose="about-brand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Collage / Atelier Image */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] overflow-hidden bg-stone-200">
          <img
            alt="Master Italian Cordwainer shaping shoe at workbench"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=1200&q=80"
          />
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-semibold font-sans">
            Cordwainer Provenance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-bold text-black">
            About Milanworld
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed font-sans">
            Milanworld Calzaturificio was founded on an enduring conviction: true distinction begins from the ground up. Rooted in the artisanal valleys of Montegranaro and designed in Via Montenapoleone, our atelier unites multi-generational cordwainer mastery with modern anatomical comfort.
          </p>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed font-sans">
            Every wooden shoe last is sculpted for ergonomic balance, every hide of French boxcalf and Tuscan reverse suede is hand-graded for grain density, and every Goodyear welt is engineered to be resoled for decades.
          </p>
          <div className="pt-2">
            <a
              className="inline-block border-b border-black text-xs font-semibold uppercase tracking-widest pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors font-sans"
              href="#catalog"
            >
              Discover Our Footwear Collection →
            </a>
          </div>

          {/* Brand Merit Badges */}
          <div className="pt-6 border-t border-stone-200 grid grid-cols-3 gap-2 sm:gap-3 text-center font-sans">
            <div className="p-3 bg-stone-50 border border-stone-100">
              <span className="block text-brand-gold text-lg mb-0.5">✦</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-black">
                Marche Lasts
              </span>
            </div>
            <div className="p-3 bg-stone-50 border border-stone-100">
              <span className="block text-brand-gold text-lg mb-0.5">🛡</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-black">
                Re-Soleable
              </span>
            </div>
            <div className="p-3 bg-stone-50 border border-stone-100">
              <span className="block text-brand-gold text-lg mb-0.5">★</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-black">
                Full-Grain Leathers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
