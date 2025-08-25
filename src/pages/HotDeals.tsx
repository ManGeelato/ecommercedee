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
      
      <ProductGrid
        title="All Hot Deals"
        filter={(product) => product.isHotDeal}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Shop Our Hot Deals?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Deals update daily with new offers</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Up to 70% off on selected items</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Time</h3>
              <p className="text-gray-600">Exclusive offers for a limited period</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;