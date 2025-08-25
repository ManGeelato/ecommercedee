import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface ProductGridProps {
  title: string;
  filter?: (product: Product) => boolean;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  filter, 
  onAddToCart, 
  onAddToWishlist 
}) => {
  const filteredProducts = filter ? products.filter(filter) : products;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;