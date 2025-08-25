import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Industrial CNC Machine',
    price: 45000,
    originalPrice: 52000,
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
    category: 'Machinery & Equipment',
    rating: 4.8,
    reviews: 24,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Gaming Laptop Pro',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    category: 'Electronics',
    rating: 4.6,
    reviews: 156,
    seller: 'ElectroWorld',
    description: 'High-performance gaming laptop with RTX graphics',
    inStock: true,
    isHotDeal: true
  },
  {
    id: '3',
    name: 'Smart Refrigerator',
    price: 899,
    image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
    category: 'Appliances',
    rating: 4.4,
    reviews: 89,
    seller: 'HomeAppliances Co',
    description: 'Energy-efficient smart refrigerator with WiFi connectivity',
    inStock: true,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Leather Business Bag',
    price: 129,
    originalPrice: 179,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'Bags & Shoes',
    rating: 4.7,
    reviews: 203,
    seller: 'Fashion Hub',
    description: 'Premium leather business bag for professionals',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '5',
    name: 'Skincare Set Premium',
    price: 89,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg',
    category: 'Beauty & Personal Care',
    rating: 4.5,
    reviews: 312,
    seller: 'Beauty Essentials',
    description: 'Complete skincare routine set with natural ingredients',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '6',
    name: 'Car Engine Parts Kit',
    price: 299,
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg',
    category: 'Car Parts',
    rating: 4.3,
    reviews: 67,
    seller: 'AutoParts Direct',
    description: 'Complete engine maintenance kit for most car models',
    inStock: true
  },
  {
    id: '7',
    name: 'Modern Office Chair',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/586344/pexels-photo-586344.jpeg',
    category: 'Furniture',
    rating: 4.6,
    reviews: 145,
    seller: 'Office Solutions',
    description: 'Ergonomic office chair with lumbar support',
    inStock: true,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Educational Toy Set',
    price: 49,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg',
    category: 'Kids & Toys',
    rating: 4.8,
    reviews: 89,
    seller: 'KidsWorld',
    description: 'Interactive educational toys for children aged 3-8',
    inStock: true,
    isNewArrival: true
  }
];

export const dealOfTheDay = {
  id: 'deal-1',
  product: products[0],
  discount: 15,
  endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  title: 'Limited Time Offer!'
};