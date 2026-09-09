import React from 'react';

export const AboutBrandStory: React.FC = () => {
  return (
    <section id="about-story" className="py-14 sm:py-20 px-5 sm:px-10 bg-white" data-purpose="about-brand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Collage / Atelier Image */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] overflow-hidden bg-stone-200">
          <img
            alt="Master tailor at work"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgoIc9O-REBoBS3ieEbBDrjUho0e3NQJIJ_YqfLP8xsNqW8N6ginzzCfcdfuHePGCvB9089EiUQZc1mlH28TIMMcSNbhgZnucM6Q_cahRno2rgE5LnueRAsOkIABIn2cGACHw6Ht1lomlKaayRztdq_QzJ85GASlFb3MlPZ1Dgm7jBz44rMX_-T6DrRlMRueOzjIa2EvCGGGhANXYeE2Po9PakKmwwIRyZro46SuG_WS4kC8-aUzRj"
          />
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-semibold font-sans">
            Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-bold text-black">
            About Milanworld
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed font-sans">
            Milanworld is more than just clothing; it is a philosophy of measured confidence. Founded in the heart of Via Montenapoleone, we curate architectural silhouettes for the modern man who values quality, subtlety, and lasting presence.
          </p>
          <div className="pt-2">
            <a
              className="inline-block border-b border-black text-xs font-semibold uppercase tracking-widest pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors font-sans"
              href="#catalog"
            >
              Discover Our Journey →
            </a>
          </div>

          {/* Brand Merit Badges */}
          <div className="pt-6 border-t border-stone-200 grid grid-cols-3 gap-2 sm:gap-3 text-center font-sans">
            <div className="p-3 bg-stone-50 border border-stone-100">
              <span className="block text-brand-gold text-lg mb-0.5">✦</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-black">
                Milan Design
              </span>
            </div>
            <div className="p-3 bg-stone-50 border border-stone-100">
              <span className="block text-brand-gold text-lg mb-0.5">🛡</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-black">
                Built to Last
              </span>
            </div>
            <div className="p-3 bg-stone-50 border border-stone-100">
              <span className="block text-brand-gold text-lg mb-0.5">★</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wider text-black">
                Slow Luxury
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
