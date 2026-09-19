import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Product, CartItem, Category, ShoeSize, FilterState, OrderConfirmation } from '../types';
import { PRODUCTS } from '../data/products';
import confetti from 'canvas-confetti';

interface ShopContextType {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size: ShoeSize, color: string, qty?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  amountToFreeShipping: number;
  isFreeShipping: boolean;
  shippingFee: number;

  // Coupons
  couponCode: string;
  setCouponCode: (code: string) => void;
  appliedCoupon: { code: string; discountPercentage: number } | null;
  couponError: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discountAmount: number;
  finalTotal: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Filters & Search
  filters: FilterState;
  setCategory: (category: Category) => void;
  toggleSizeFilter: (size: ShoeSize) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortBy: (sort: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating') => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  filteredProducts: Product[];

  // Modals & Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  isTrackOrderOpen: boolean;
  setIsTrackOrderOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Order Flow
  orderConfirmation: OrderConfirmation | null;
  setOrderConfirmation: (order: OrderConfirmation | null) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 150;
const STANDARD_SHIPPING_FEE = 25;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state persisted
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('milan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('milan_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercentage: number } | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmation | null>(null);

  // Filters
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    selectedSizes: [],
    priceRange: [150, 600],
    sortBy: 'featured',
    searchQuery: '',
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('milan_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Save wishlist to local storage
  useEffect(() => {
    try {
      localStorage.setItem('milan_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Cart operations
  const addToCart = (product: Product, size: ShoeSize, color: string, qty = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, color: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size && item.selectedColor === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const cartSubtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cart]
  );

  const isFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = cartSubtotal === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  // Discount calculation
  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return Math.round((cartSubtotal * appliedCoupon.discountPercentage) / 100);
  }, [cartSubtotal, appliedCoupon]);

  const finalTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  // Apply coupon
  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    setCouponError(null);

    if (cleanCode === 'MILAN10') {
      setAppliedCoupon({ code: 'MILAN10', discountPercentage: 10 });
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
      return true;
    } else if (cleanCode === 'STREETWEAR15' && cartSubtotal >= 2500) {
      setAppliedCoupon({ code: 'STREETWEAR15', discountPercentage: 15 });
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
      });
      return true;
    } else if (cleanCode === 'STREETWEAR15') {
      setCouponError('STREETWEAR15 requires a minimum cart value of ₹2,500');
      return false;
    } else {
      setCouponError('Invalid coupon code. Try code "MILAN10"');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError(null);
  };

  // Wishlist toggle
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Filter setters
  const setCategory = (category: Category) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const toggleSizeFilter = (size: ShoeSize) => {
    setFilters((prev) => {
      const exists = prev.selectedSizes.includes(size);
      return {
        ...prev,
        selectedSizes: exists ? prev.selectedSizes.filter((s) => s !== size) : [...prev.selectedSizes, size],
      };
    });
  };

  const setPriceRange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: range }));
  };

  const setSortBy = (sortBy: FilterState['sortBy']) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const setSearchQuery = (searchQuery: string) => {
    setFilters((prev) => ({ ...prev, searchQuery }));
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      selectedSizes: [],
      priceRange: [150, 600],
      sortBy: 'featured',
      searchQuery: '',
    });
  };

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }

      // Size filter
      if (filters.selectedSizes.length > 0) {
        const matchesSize = filters.selectedSizes.some((size) => item.sizes.includes(size));
        if (!matchesSize) return false;
      }

      // Price filter
      if (item.price < filters.priceRange[0] || item.price > filters.priceRange[1]) {
        return false;
      }

      // Search query
      if (filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesTagline && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default order
    });
  }, [filters]);

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountToFreeShipping,
        isFreeShipping,
        shippingFee,
        couponCode,
        setCouponCode,
        appliedCoupon,
        couponError,
        applyCoupon,
        removeCoupon,
        discountAmount,
        finalTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        filters,
        setCategory,
        toggleSizeFilter,
        setPriceRange,
        setSortBy,
        setSearchQuery,
        resetFilters,
        filteredProducts,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isTrackOrderOpen,
        setIsTrackOrderOpen,
        quickViewProduct,
        setQuickViewProduct,
        orderConfirmation,
        setOrderConfirmation,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
