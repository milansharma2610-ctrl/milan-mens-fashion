export type Category = 'all' | 'hoodies' | 'tees' | 'bottomwear' | 'jackets' | 'accessories';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'hoodies' | 'tees' | 'bottomwear' | 'jackets' | 'accessories';
  price: number;
  originalPrice: number;
  discountPercentage: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  rating: number;
  reviewCount: number;
  isNewDrop?: boolean;
  isBestSeller?: boolean;
  isLimitedEdition?: boolean;
  stockLeft: number;
  fabricSpecs: {
    gsm: string;
    composition: string;
    fit: string;
    care: string[];
    origin: string;
  };
  description: string;
}

export interface CartItem {
  product: Product;
  selectedSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  selectedColor: string;
  quantity: number;
}

export interface FilterState {
  category: Category;
  selectedSizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  priceRange: [number, number];
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating';
  searchQuery: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface OrderConfirmation {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  grandTotal: number;
  shippingAddress: ShippingAddress;
  paymentMethod: 'COD' | 'UPI' | 'CARD';
}
