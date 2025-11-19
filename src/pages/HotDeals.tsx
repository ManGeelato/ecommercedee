import React from 'react';
import ProductGrid from '../components/ProductGrid';
import DealOfTheDay from '../components/DealOfTheDay';
import { Product, CartItem } from '../types';

interface HotDealsProps {
  cart: CartItem[];
  wishlist: Product[];
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

const HotDeals: React.FC<HotDealsProps> = ({ cart, wishlist, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">🔥 Hot Deals</h1>
          <p className="text-xl text-red-100">Limited time offers you can't miss!</p>
        </div>
      </div>

      <DealOfTheDay />
    </div>
  );
};

export default HotDeals;