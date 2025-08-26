import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import * as Icons from 'lucide-react';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;

            
            
            return (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border hover:border-blue-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.productCount.toLocaleString()} items
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;