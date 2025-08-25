import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { Product, CartItem } from '../types';

interface NewArrivalsProps {
  cart: CartItem[];
  wishlist: Product[];
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ cart, wishlist, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">🆕 New Arrivals</h1>
          <p className="text-xl text-green-100">Discover the latest products just added to our marketplace</p>
        </div>
      </div>

      <ProductGrid
        title="Latest Products"
        filter={(product) => product.isNewArrival}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Stay Ahead with New Arrivals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-gray-600">Cutting-edge products from top brands</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected high-quality items</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
              <p className="text-gray-600">Be the first to get new products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;