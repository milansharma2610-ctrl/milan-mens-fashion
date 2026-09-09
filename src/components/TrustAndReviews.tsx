import React, { useState } from 'react';
import { CLIENT_REVIEWS } from '../data/products';
import confetti from 'canvas-confetti';

export const TrustAndReviews: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  return (
    <>
      {/* Customer Reflections Section */}
      <section className="py-14 sm:py-18 px-4 sm:px-8 bg-[#f2efe9]" data-purpose="customer-reviews">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-stone-500 block mb-1 font-sans">
                Praise &amp; Recognition
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider font-bold text-black">
                Client Reflections
              </h2>
            </div>
            <a className="text-[10px] uppercase tracking-widest text-black underline font-medium font-sans" href="#catalog">
              All Reviews
            </a>
          </div>

          {/* Testimonials Horizontal Carousel on mobile / Grid on desktop */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-3">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="min-w-[260px] sm:min-w-[300px] lg:min-w-0 bg-white p-5 sm:p-6 border border-stone-300/80 snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="text-brand-gold text-xs mb-2">★★★★★</div>
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed font-serif">
                    {review.quote}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2.5 font-sans">
                  <div className="w-7 h-7 rounded-full bg-stone-800 text-brand-sand text-[10px] flex items-center justify-center font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-black">{review.author}</p>
                    <p className="text-[9px] text-stone-400">Verified Patron • {review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Private Membership Club */}
      <section className="bg-brand-black text-white py-14 px-6 border-t border-brand-border" data-purpose="newsletter-vip">
        <div className="max-w-md mx-auto text-center">
          <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-2 font-sans">
            Private Membership
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider font-light mb-2">
            Join The Atelier Club
          </h3>
          <p className="text-xs text-stone-400 font-light mb-6 font-sans">
            Receive private runway invitations, bespoke release previews, and curated styling notes.
          </p>

          {subscribed ? (
            <div className="p-4 bg-neutral-900 border border-brand-gold/40 text-xs text-brand-sand">
              <p className="font-semibold uppercase tracking-wider">Welcome to the Atelier Club.</p>
              <p className="text-[11px] text-neutral-400 mt-1">Your styling dispatch has been confirmed.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 font-sans">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-[#141414] border border-neutral-700 text-white placeholder-neutral-500 text-xs px-4 py-3.5 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold w-full outline-none"
              />
              <button
                type="submit"
                className="bg-brand-gold hover:bg-brand-sand text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
          <span className="block text-[9px] text-neutral-500 mt-2.5 font-sans">
            Unsubscribe anytime. Privacy policy honored.
          </span>
        </div>
      </section>
    </>
  );
};
