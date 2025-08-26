export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  seller: string;
  description: string;
  inStock: boolean;
  isHotDeal?: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Deal {
  id: string;
  product: Product;
  discount: number;
  endTime: Date;
  title: string;
}