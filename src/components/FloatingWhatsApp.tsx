import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/917895499065?text=${encodeURIComponent(
    "Hi Milan Men's Fashion (milanworld.online), I have a query regarding streetwear products and sizes."
  )}`;

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-2xl hover:scale-105 group border border-white/20"
        aria-label="Chat on WhatsApp (+91 7895499065)"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 border border-black animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 border border-black"></span>
        </div>
        <div className="hidden sm:flex flex-col text-left text-xs font-semibold leading-tight">
          <span>Need Sizing Help?</span>
          <span className="text-[10px] text-white/90 font-normal">WhatsApp Milan Support</span>
        </div>
      </a>
    </aside>
  );
};
