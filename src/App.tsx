import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { NewArrivals } from './components/NewArrivals';
import { EditorialInterstitial } from './components/EditorialInterstitial';
import { ProductCatalog } from './components/ProductCatalog';
import { BrandPillars } from './components/BrandPillars';
import { AboutBrandStory } from './components/AboutBrandStory';
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
      <div className="min-h-screen bg-[#faf9f6] text-[#111111] font-sans antialiased selection:bg-brand-gold selection:text-black flex flex-col">
        {/* Global Navigation & Header */}
        <Header />

        {/* Main Content Sections matching user design flow */}
        <main className="flex-1">
          <Hero />
          <Categories />
          <NewArrivals />
          <EditorialInterstitial />
          <ProductCatalog />
          <BrandPillars />
          <AboutBrandStory />
          <TrustAndReviews />
        </main>

        {/* Global Luxury Footer */}
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
