import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/products';
import { Star, CheckCircle2, Instagram, Heart } from 'lucide-react';

export const TrustAndReviews: React.FC = () => {
  const lookbookImages = [
    {
      url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop',
      user: '@street_rahul',
      fit: 'Vault Boxy Hoodie (Onyx)',
    },
    {
      url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop',
      user: '@sid.vibes',
      fit: 'Neo-Tokyo Acid Wash Tee',
    },
    {
      url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
      user: '@kabir_drip',
      fit: 'Tactical Parachute Cargos',
    },
    {
      url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop',
      user: '@arjun_street',
      fit: 'Wool Varsity Jacket',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-brand-950 border-b border-brand-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Customer Reviews Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-gold">
              Community Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display mt-1">
              What The Streets Say
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Over 2,400+ satisfied buyers across India rocking Milan Men streetwear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-3xl bg-brand-900/60 border border-brand-800/80 flex flex-col justify-between space-y-4 hover:border-brand-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-500 font-medium">{review.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-display">"{review.title}"</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{review.author}</span>
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                      )}
                    </h4>
                    <p className="text-[11px] text-zinc-500">{review.city} • Verified Buyer</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-brand-850 border border-brand-800">
                    {review.productName.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Lookbook / Community Showcase */}
        <div className="pt-8 border-t border-brand-850">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider font-mono">
                <Instagram className="w-4 h-4" />
                <span>#MilanMenCommunity</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display mt-1">
                The Streetwear Lookbook
              </h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-brand-gold transition-colors flex items-center gap-1.5"
            >
              <span>Follow @milanmensfashion</span>
              <span>→</span>
            </a>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {lookbookImages.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-900 border border-brand-800/80 cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.fit}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                      <Heart className="w-4 h-4 text-brand-gold" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-gold">{item.user}</span>
                    <p className="text-xs text-white font-medium">{item.fit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
