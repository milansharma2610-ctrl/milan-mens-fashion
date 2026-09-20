import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight, Truck } from 'lucide-react';
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
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'All Footwear', category: 'all' as const },
    { label: 'Artisanal Loafers', category: 'loafers' as const },
    { label: 'Luxury Sneakers', category: 'sneakers' as const },
    { label: 'Bespoke Oxfords', category: 'oxfords' as const },
    { label: 'Tuscan Boots', category: 'boots' as const },
    { label: 'Resort Slides', category: 'sandals' as const },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-brand-black text-brand-gold py-2 px-3 sm:px-8 text-[10px] tracking-widest-luxury uppercase font-medium flex justify-between items-center border-b border-brand-border/40">
        <span className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 opacity-80" />
          Complimentary Express Shipping $150+
        </span>
        <span className="text-neutral-400 font-light hidden xs:inline tracking-widest">
          Free Worldwide Size Exchanges
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-[#0c0c0c]/95 backdrop-blur-md text-white border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left: Mobile Menu Trigger & Desktop Nav */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-1 -ml-1 text-white hover:text-brand-gold transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6 stroke-[1.2]" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 text-[11px] uppercase tracking-widest text-neutral-300 font-medium">
              {navLinks.slice(1, 6).map((item) => (
                <button
                  key={item.category}
                  onClick={() => {
                    setCategory(item.category);
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`hover:text-brand-gold transition-colors ${
                    filters.category === item.category ? 'text-brand-gold font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-brand-gold text-brand-sand transition-colors border-l border-neutral-700 pl-4 flex items-center gap-1.5 font-semibold"
              >
                <span>Services Menu</span>
                <span className="text-[8px] bg-brand-gold text-black px-1 py-0.5 font-bold uppercase tracking-wider">Atelier</span>
              </button>
            </nav>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="text-center cursor-pointer" onClick={() => { setCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="inline-block tracking-[0.28em] font-serif text-xl sm:text-2xl font-bold uppercase text-white">
              MILANWORLD
            </span>
            <span className="block text-[8px] tracking-[0.35em] text-brand-gold font-sans font-medium uppercase mt-0.5">
              Calzaturificio • Milano
            </span>
          </div>

          {/* Right: Action Icons (Search, Wishlist, Shopping Bag) */}
          <div className="flex items-center space-x-3.5 sm:space-x-4">
            <button
              onClick={() => setShowSearchModal(true)}
              aria-label="Search"
              className="p-1 hover:text-brand-gold transition-colors"
            >
              <Search className="w-5 h-5 stroke-[1.2]" />
            </button>

            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="relative p-1 hover:text-brand-gold transition-colors"
            >
              <Heart className="w-5 h-5 stroke-[1.2]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              className="relative p-1 hover:text-brand-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex">
          <div className="w-4/5 max-w-sm bg-brand-black border-r border-neutral-800 h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div>
                  <div className="font-serif text-xl tracking-[0.2em] font-bold uppercase text-white">MILANWORLD</div>
                  <div className="text-[9px] text-brand-gold tracking-[0.3em] font-sans font-medium uppercase mt-0.5">Calzaturificio • Artigiani Calzolai</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-6 h-6 stroke-[1.2]" />
                </button>
              </div>

              <div className="py-6 space-y-3">
                <p className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold px-2 mb-2">
                  Footwear Collections
                </p>
                {navLinks.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => {
                      setCategory(item.category);
                      setMobileMenuOpen(false);
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs uppercase tracking-widest font-medium transition-colors ${
                      filters.category === item.category
                        ? 'bg-brand-gold text-black font-semibold'
                        : 'text-neutral-300 hover:bg-neutral-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>

              {/* Atelier Services Menu in Drawer */}
              <div className="py-4 border-t border-neutral-800 space-y-2">
                <p className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold px-2 mb-2">
                  Atelier Services
                </p>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded text-xs uppercase tracking-widest font-medium text-neutral-200 hover:bg-neutral-900 transition-colors border border-neutral-800/80"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-brand-gold">✦</span>
                    <span>All Services Menu</span>
                  </span>
                  <span className="text-[9px] text-brand-gold font-mono">View All →</span>
                </button>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 bg-neutral-900/60 border border-neutral-800 text-left hover:border-brand-gold/60 transition-colors"
                  >
                    <span className="text-[9px] text-brand-gold font-mono block">Recrafting</span>
                    <span className="text-[11px] text-white font-medium block mt-0.5">Resoling</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 bg-neutral-900/60 border border-neutral-800 text-left hover:border-brand-gold/60 transition-colors"
                  >
                    <span className="text-[9px] text-brand-gold font-mono block">Glacage</span>
                    <span className="text-[11px] text-white font-medium block mt-0.5">Patina Studio</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 bg-neutral-900/60 border border-neutral-800 text-left hover:border-brand-gold/60 transition-colors"
                  >
                    <span className="text-[9px] text-brand-gold font-mono block">Custom</span>
                    <span className="text-[11px] text-white font-medium block mt-0.5">Su Misura</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 bg-neutral-900/60 border border-neutral-800 text-left hover:border-brand-gold/60 transition-colors"
                  >
                    <span className="text-[9px] text-brand-gold font-mono block">Fitting</span>
                    <span className="text-[11px] text-white font-medium block mt-0.5">Concierge</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 text-xs text-neutral-400 space-y-2">
              <p className="text-[10px] tracking-widest uppercase text-brand-gold">Marche • Milano • Paris</p>
              <p className="text-[11px]">Shoe Atelier Concierge: +91 7895499065</p>
              <p className="text-[10px] text-neutral-500">© 2026 MILANWORLD Calzaturificio S.P.A.</p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Predictive Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:pt-20">
          <div className="bg-brand-charcoal border border-neutral-700 w-full max-w-xl rounded-none shadow-2xl overflow-hidden animate-slide-up">
            <form onSubmit={handleSearchSubmit} className="relative p-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-brand-gold shrink-0 stroke-[1.2]" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search loafers, Goodyear oxfords, sneakers, boots..."
                  className="w-full bg-transparent text-white placeholder-neutral-500 outline-none text-sm font-sans tracking-wide"
                  autoFocus
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => setSearchInput('')}
                    className="text-neutral-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-mono"
                >
                  ESC
                </button>
              </div>
            </form>

            <div className="p-4 max-h-80 overflow-y-auto">
              {searchSuggestions.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-brand-gold font-semibold mb-2">
                    Matching Atelier Footwear
                  </p>
                  {searchSuggestions.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        setQuickViewProduct(prod);
                        setShowSearchModal(false);
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-neutral-800/80 cursor-pointer transition-colors group"
                    >
                      <img src={prod.images[0]} alt={prod.name} className="w-10 h-12 object-cover bg-black" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-white group-hover:text-brand-gold transition-colors truncate">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 truncate">{prod.tagline}</p>
                      </div>
                      <span className="text-xs font-semibold text-white font-mono">${prod.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                    Popular Footwear Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Penny Loafer', 'Montenapoleone Oxford', 'Primo Court Sneaker', 'Chelsea Boot', 'Belgian Tassel', 'Wholecut'].map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setSearchInput(s);
                          setSearchQuery(s);
                          setShowSearchModal(false);
                          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-3 py-1 bg-neutral-800 text-neutral-300 hover:text-white text-xs tracking-wider border border-neutral-700"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
