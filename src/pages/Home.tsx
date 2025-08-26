import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import DealOfTheDay from '../components/DealOfTheDay';
import ProductGrid from '../components/ProductGrid';
import { Product, CartItem } from '../types';

interface HomeProps {
  cart: CartItem[];
  wishlist: Product[];
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ cart, wishlist, onAddToCart, onAddToWishlist }) => {
  return (
    <main>
      <HeroBanner />
      <CategoryGrid />
      <DealOfTheDay />
      
      <ProductGrid
        title="🔥 Hot Deals"
        filter={(product) => product.isHotDeal}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
      
      <ProductGrid
        title="⭐ Featured Products"
        filter={(product) => product.isFeatured}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
      
      <ProductGrid
        title="🆕 New Arrivals"
        filter={(product) => product.isNewArrival}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
      
      <ProductGrid
        title="All Products"
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
    </main>
  );
};

export default Home;