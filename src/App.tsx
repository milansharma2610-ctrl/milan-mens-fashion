import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { Categories } from './components/Categories';
import { ProductCatalog } from './components/ProductCatalog';
import { TrustAndReviews } from './components/TrustAndReviews';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileNav } from './components/MobileNav';

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-brand-950 text-white flex flex-col selection:bg-brand-gold selection:text-black">
        {/* Global Navigation & Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <TrustTicker />
          <Categories />
          <ProductCatalog />
          <TrustAndReviews />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Drawers & Modals */}
        <CartDrawer />
        <WishlistDrawer />
        <ProductDetailModal />
        <SizeGuideModal />
        <CheckoutModal />
        <TrackOrderModal />

        {/* Floating Utilities */}
        <FloatingWhatsApp />
        <MobileNav />
      </div>
    </ShopProvider>
  );
};

export default App;
