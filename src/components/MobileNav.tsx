import React from 'react';
import { useShop } from '../context/ShopContext';
import { Home, Compass, Heart, ShoppingBag } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setCategory } = useShop();

  const handleHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCatalog = () => {
    setCategory('all');
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-brand-950/95 backdrop-blur-lg border-t border-brand-850 px-4 py-2 flex items-center justify-around shadow-2xl">
      <button
        onClick={handleHome}
        className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white py-1 transition-colors"
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wide">Home</span>
      </button>

      <button
        onClick={handleCatalog}
        className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white py-1 transition-colors"
      >
        <Compass className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wide">Drops</span>
      </button>

      <button
        onClick={() => setIsWishlistOpen(true)}
        className="relative flex flex-col items-center gap-1 text-zinc-400 hover:text-white py-1 transition-colors"
      >
        <Heart className="w-5 h-5" />
        {wishlist.length > 0 && (
          <span className="absolute 0 top-0.5 right-2 w-3.5 h-3.5 rounded-full bg-brand-gold text-black text-[9px] font-black flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
        <span className="text-[10px] font-medium tracking-wide">Saved</span>
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col items-center gap-1 text-zinc-400 hover:text-white py-1 transition-colors"
      >
        <ShoppingBag className="w-5 h-5 text-brand-gold" />
        {cartCount > 0 && (
          <span className="absolute 0 top-0.5 right-2 w-3.5 h-3.5 rounded-full bg-white text-black text-[9px] font-black flex items-center justify-center">
            {cartCount}
          </span>
        )}
        <span className="text-[10px] font-semibold text-brand-gold tracking-wide">Bag</span>
      </button>
    </div>
  );
};
