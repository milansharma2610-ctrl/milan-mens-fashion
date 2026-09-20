import React from 'react';
import { Wrench, Sparkles, Footprints, ShieldCheck, ArrowRight, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  turnaround: string;
  price: string;
  icon: React.ReactNode;
  highlights: string[];
  inquiryText: string;
}

export const AtelierServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'resoling',
      title: 'Master Goodyear & Blake Resoling',
      subtitle: 'Full Cordwainer Recrafting Atelier',
      description:
        'Complete deconstruction down to the insole. Our Montegranaro artisans replace the worn outsole with oak-bark tanned leather, renew the cork cushioning bed, re-stitch the welt, and finish with hand-burnished edges.',
      turnaround: '2 - 3 Weeks',
      price: 'From $120',
      icon: <Wrench className="w-6 h-6 text-brand-gold stroke-[1.4]" />,
      highlights: [
        'Original Marche wooden lasting',
        'Natural cork filler renewal',
        'Brass nail heel reenforcement',
        'Full upper deep nourishing cream'
      ],
      inquiryText: 'Hello Milanworld Atelier, I would like to inquire about Master Goodyear/Blake Resoling for my footwear.',
    },
    {
      id: 'glacage',
      title: 'Patina Studio & Mirror Glaçage',
      subtitle: 'Saphir Médaille d\'Or 1925 Artistry',
      description:
        'Multi-stage hand-rubbed museum patina blending and high-gloss toe mirror shine. We apply natural beeswax, carnauba emulsions, and mineral pigments to achieve deep optical depth and mirror gloss.',
      turnaround: '3 - 5 Days',
      price: 'From $65',
      icon: <Sparkles className="w-6 h-6 text-brand-gold stroke-[1.4]" />,
      highlights: [
        'Hand-applied museum patina shades',
        'Ice-water & beeswax toe mirror polish',
        'Edge dressing & welt waxing',
        'Vachetta leather deodorizing'
      ],
      inquiryText: 'Hello Milanworld Atelier, I would like to book a Patina & Mirror Glaçage treatment for my shoes.',
    },
    {
      id: 'bespoke',
      title: 'Su Misura (Made-to-Order Last)',
      subtitle: 'Bespoke Morphological Lasting',
      description:
        'Commission an entirely bespoke pair shaped exclusively for your feet. Our master cordwainer carves a personal wooden last, followed by hand-cutting pristine French boxcalf or reverse suede to your silhouette.',
      turnaround: '6 - 8 Weeks',
      price: 'Bespoke Quote',
      icon: <Footprints className="w-6 h-6 text-brand-gold stroke-[1.4]" />,
      highlights: [
        'Custom carved beechwood lasts',
        'Personal leather & lining selection',
        'Violin waist sculpted soles',
        'Personalized initials brass stamp'
      ],
      inquiryText: 'Hello Milanworld Atelier, I would like to inquire about commissioning a Su Misura bespoke pair.',
    },
    {
      id: 'concierge',
      title: 'White-Glove Fit & Sizing Concierge',
      subtitle: '1-on-1 Cordwainer Fit Consultation',
      description:
        'Unsure of your international size or dealing with high insteps? Connect directly with our shoe fit specialist for foot measurements analysis, personalized width calibration, and complimentary courier size exchanges.',
      turnaround: 'Instant / Same-Day',
      price: 'Complimentary',
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold stroke-[1.4]" />,
      highlights: [
        'Virtual millimeter measurement review',
        'Insole & tongue pad micro-adjustments',
        'Free door-to-door size exchange within 14 days',
        'Lifetime shoe care recommendations'
      ],
      inquiryText: 'Hello Milanworld Atelier, I would like to request a White-Glove Sizing & Fit consultation.',
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-8 bg-[#111111] text-white border-t border-neutral-800" data-purpose="atelier-services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-2 font-mono">
              Cura &amp; Manutenzione • Atelier Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider font-light">
              Master Cordwainer <span className="font-bold">Services Menu</span>
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            True luxury is built to endure for a lifetime. Explore our atelier's dedicated resoling, bespoke patina, and personalized shoe care services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#181818] border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-gold transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-none group-hover:border-brand-gold/60 transition-colors">
                    {service.icon}
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-xs text-brand-gold font-semibold block">{service.price}</span>
                    <span className="text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5 justify-end">
                      <Clock className="w-3 h-3 opacity-60" /> {service.turnaround}
                    </span>
                  </div>
                </div>

                <span className="text-[9px] uppercase tracking-widest text-brand-gold/80 font-mono block mb-1">
                  {service.subtitle}
                </span>
                <h3 className="font-serif text-xl font-semibold uppercase tracking-wider text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/80">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 opacity-80" />
                      <span className="text-[11px] font-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/917895499065?text=${encodeURIComponent(service.inquiryText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-neutral-900 hover:bg-brand-gold text-white hover:text-black text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 border border-neutral-700 hover:border-brand-gold transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Service / Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Cordwainer Hotline Banner */}
        <div className="mt-12 bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg uppercase tracking-wider font-semibold text-white">
              Have a pair requiring custom repair or consultation?
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              Send high-resolution photos of your shoes to our master shoemaker on WhatsApp for an immediate assessment.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/917895499065?text=Hello%20Milanworld%20Atelier,%20I%20have%20a%20footwear%20care/repair%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-white text-black text-xs font-semibold uppercase tracking-widest px-6 py-3 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Atelier</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
