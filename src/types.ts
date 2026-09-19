export type Category = 'all' | 'loafers' | 'sneakers' | 'oxfords' | 'boots' | 'sandals';

export type ShoeSize =
  | 'US 7'
  | 'US 7.5'
  | 'US 8'
  | 'US 8.5'
  | 'US 9'
  | 'US 9.5'
  | 'US 10'
  | 'US 10.5'
  | 'US 11'
  | 'US 11.5'
  | 'US 12';

export interface ShoeSpecs {
  leather: string;
  construction: string;
  sole: string;
  origin: string;
  care: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'loafers' | 'sneakers' | 'oxfords' | 'boots' | 'sandals';
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: ShoeSize[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimitedEdition?: boolean;
  stockLeft: number;
  shoeSpecs: ShoeSpecs;
  description: string;
}

export interface CartItem {
  product: Product;
  selectedSize: ShoeSize;
  selectedColor: string;
  quantity: number;
}

export interface FilterState {
  category: Category;
  selectedSizes: ShoeSize[];
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
