import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    filters,
    setCategory,
    setSearchQuery,
    setQuickViewProduct,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Predictive search suggestions
  const searchSuggestions = searchInput.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          p.category.toLowerCase().includes(searchInput.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchInput.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setShowSearchModal(false);
    // Scroll to catalog
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'All Vault', category: 'all' as const },
    { label: 'Hoodies', category: 'hoodies' as const, badge: 'HOT' },
    { label: 'Oversized Tees', category: 'tees' as const },
    { label: 'Cargos & Pants', category: 'bottomwear' as const },
    { label: 'Jackets', category: 'jackets' as const, badge: 'NEW' },
    { label: 'Accessories', category: 'accessories' as const },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-950/90 backdrop-blur-md border-b border-brand-800/80 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-850 to-brand-900 border-b border-brand-800 text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-brand-gold font-semibold">
          <Flame className="w-3.5 h-3.5 animate-pulse text-brand-gold" />
          <span>VAULT DROP LIVE:</span>
        </span>
        <span className="text-zinc-300">
          Free Express Delivery on Orders Above ₹1,499 | Code:
        </span>
        <span className="px-1.5 py-0.5 rounded bg-brand-gold/15 text-brand-gold border border-brand-gold/30 font-mono font-bold tracking-wider">
          MILAN10
        </span>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-brand-850"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <a
            href="#"
            className="flex flex-col group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tighter uppercase font-display text-white group-hover:text-brand-gold transition-colors">
                MILAN
              </span>
              <span className="text-2xl font-light tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
                MEN
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-gold ml-0.5"></span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 -mt-1 font-semibold">
              milanworld.online
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => {
            const isActive = filters.category === item.category;
            return (
              <button
                key={item.category}
                onClick={() => {
                  setCategory(item.category);
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all flex items-center gap-1.5 relative ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'text-zinc-300 hover:text-white hover:bg-brand-850'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                      isActive
                        ? 'bg-brand-900 text-brand-gold'
                        : 'bg-brand-gold text-brand-950'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Search, Wishlist, Cart Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={() => setShowSearchModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900 border border-brand-800 text-zinc-400 hover:text-white hover:border-brand-700 transition-all text-xs"
          >
            <Search className="w-4 h-4 text-zinc-400" />
            <span className="hidden sm:inline">Search drip...</span>
            <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] bg-brand-800 rounded text-zinc-300">
              /
            </kbd>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 text-zinc-300 hover:text-white rounded-full hover:bg-brand-850 transition-colors"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-brand-gold text-black text-[10px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-brand-gold hover:bg-brand-bronze text-brand-950 font-bold transition-all shadow-md hover:shadow-brand-gold/20"
            aria-label="View Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-black text-white text-[10px] font-extrabold flex items-center justify-center border border-brand-gold">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline text-xs tracking-wider uppercase font-semibold">
              Cart
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/70 backdrop-blur-sm flex">
          <div className="w-4/5 max-w-sm bg-brand-950 border-r border-brand-800 h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brand-800">
                <div>
                  <div className="text-xl font-black font-display text-white">MILAN MEN</div>
                  <div className="text-[10px] text-brand-gold tracking-widest font-mono">milanworld.online</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-brand-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-2 px-3">
                  Collections & Drops
                </p>
                {navLinks.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => {
                      setCategory(item.category);
                      setMobileMenuOpen(false);
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                      filters.category === item.category
                        ? 'bg-brand-gold text-brand-950 font-bold'
                        : 'text-zinc-300 hover:bg-brand-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-800 text-xs text-zinc-400 space-y-3">
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Rajnagar Extension, Ghaziabad</span>
              </div>
              <p className="text-zinc-400">Support: +91 7895499065</p>
              <p className="text-[11px] text-zinc-500">© 2026 Milan Men's Fashion</p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Real-time Predictive Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 sm:pt-20">
          <div className="bg-brand-900 border border-brand-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            <form onSubmit={handleSearchSubmit} className="relative p-4 border-b border-brand-800">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-brand-gold shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search heavyweight hoodies, oversized tees, cargos..."
                  className="w-full bg-transparent text-white placeholder-zinc-500 outline-none text-base"
                  autoFocus
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => setSearchInput('')}
                    className="text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="px-2.5 py-1 text-xs rounded bg-brand-800 text-zinc-300 hover:bg-brand-700"
                >
                  ESC
                </button>
              </div>
            </form>

            {/* Quick Suggestions */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {searchSuggestions.length > 0 ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Matching Streetwear
                  </p>
                  <div className="space-y-2">
                    {searchSuggestions.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setQuickViewProduct(prod);
                          setShowSearchModal(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-brand-850 cursor-pointer transition-colors group"
                      >
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          className="w-12 h-14 object-cover rounded-lg bg-brand-950"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors truncate">
                            {prod.name}
                          </h4>
                          <p className="text-xs text-zinc-400 truncate">{prod.tagline}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm font-bold text-white">₹{prod.price.toLocaleString()}</span>
                          <span className="block text-[10px] text-emerald-400 font-semibold">
                            {prod.discountPercentage}% OFF
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : searchInput.trim() ? (
                <div className="text-center py-8 text-zinc-400">
                  <p className="text-sm font-medium">No direct streetwear matches found for "{searchInput}"</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Try searching "hoodie", "tee", "cargo", or "jacket"
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Trending Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['420 GSM Boxy Hoodie', 'Acid Wash Oversized', 'Parachute Cargos', 'Varsity Jacket', 'Tactical Sling'].map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSearchInput(item);
                            setSearchQuery(item);
                            setShowSearchModal(false);
                            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-3 py-1.5 rounded-full bg-brand-800/80 hover:bg-brand-700 text-xs text-zinc-300 hover:text-white border border-brand-700"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
