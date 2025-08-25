import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { Product, CartItem } from '../types';
import * as Icons from 'lucide-react';

interface CategoryPageProps {
  cart: CartItem[];
  wishlist: Product[];
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ cart, wishlist, onAddToCart, onAddToWishlist }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
  const categoryProducts = products.filter(product => product.category === category.name);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-blue-100">
            Discover {category.productCount.toLocaleString()} quality products in this category
          </p>
        </div>
      </div>

      {/* Category Stats */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {category.productCount.toLocaleString()}
              </div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Math.floor(category.productCount * 0.8).toLocaleString()}
              </div>
              <div className="text-gray-600">In Stock</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {Math.floor(category.productCount * 0.15).toLocaleString()}
              </div>
              <div className="text-gray-600">On Sale</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Math.floor(category.productCount * 0.1).toLocaleString()}
              </div>
              <div className="text-gray-600">New Arrivals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {category.name} Products
            </h2>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onAddToWishlist={onAddToWishlist}
                  isInCart={cart.some(item => item.id === product.id)}
                  isInWishlist={wishlist.some(item => item.id === product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <IconComponent className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Products Found</h3>
              <p className="text-gray-600 mb-8">
                We're working on adding products to this category. Check back soon!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse All Categories
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Category Benefits */}
      <div className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose {category.name}?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">All products are verified and quality tested</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping worldwide</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 customer support for all your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;