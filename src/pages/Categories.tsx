import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import * as Icons from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All Categories</h1>
          <p className="text-xl text-gray-600">Browse our extensive range of products across all categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
            
            return (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border hover:border-blue-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  {category.productCount.toLocaleString()} items available
                </p>
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-block">
                  Browse Category
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;