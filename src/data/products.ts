import { Product } from '../types';
import machinery01 from '../assets/images/machinery01.jpg';
import machinery02 from '../assets/images/machinery02.jpg';
import machinery03 from '../assets/images/machinery03.jpg';
import machinery04 from '../assets/images/machinery04.jpg';

import electronics01 from '../assets/images/electronics01.jpg';
import electronics02 from '../assets/images/electronics02.jpg';
import electronics03 from '../assets/images/electronics03.jpg';
import electronics04 from '../assets/images/electronics04.jpg';

import appliances01 from '../assets/images/appliances01.jpg';
import appliances02 from '../assets/images/appliances02.jpg';
import appliances03 from '../assets/images/appliances03.jpg';
import appliances04 from '../assets/images/appliances04.jpg';

import shoesbags from '../assets/images/shoes&bags.jpg';
import shoesbags01 from '../assets/images/shoes&bags01.jpg';
import shoesbags02 from '../assets/images/shoes&bags02.jpg';
import shoesbags03 from '../assets/images/shoes&bags03.jpg';

import beauty01 from '../assets/images/beauty01.jpg';
import beauty02 from '../assets/images/beauty02.jpg';
import beauty03 from '../assets/images/beauty03.jpg';
import beauty04 from '../assets/images/beauty04.jpg';

import carparts01 from '../assets/images/carparts01.jpg';
import carparts02 from '../assets/images/carparts02.jpg';
import carparts03 from '../assets/images/carparts03.jpg';
import carparts04 from '../assets/images/carparts04.jpg';

import furniture01 from '../assets/images/furniture01.jpg';
import furniture02 from '../assets/images/furniture02.jpg';
import furniture03 from '../assets/images/furniture03.jpg';
import furniture04 from '../assets/images/furniture04.jpg';

import kids01 from '../assets/images/kids01.jpg';
import kids02 from '../assets/images/kids02.jpg';
import kids03 from '../assets/images/kids03.jpg';
import kids04 from '../assets/images/kids04.jpg';

import hardware01 from '../assets/images/hardware01.jpg';
import hardware02 from '../assets/images/hardware02.jpg';
import hardware03 from '../assets/images/hardware03.jpg';
import hardware04 from '../assets/images/hardware04.jpg';

import sport01 from '../assets/images/sport01.jpg';
import sport02 from '../assets/images/sport02.jpg';
import sport03 from '../assets/images/sport03.jpg';
import sport04 from '../assets/images/sport04.jpg';

import medical01 from '../assets/images/medical01.jpg';
import medical02 from '../assets/images/medical02.jpg';
import medical03 from '../assets/images/medical03.jpg';
import medical04 from '../assets/images/medical04.jpg';
import medical05 from '../assets/images/medical05.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Industrial CNC Machine',
    price: 45000,
    originalPrice: 52000,
    image: machinery01,
    category: 'Machinery & Equipment',
    rating: 4.6,
    reviews: 24,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Walk Talks',
    price: 1299,
    originalPrice: 1599,
    image: electronics01,
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
    name: 'Televisions',
    price: 1299,
    originalPrice: 1599,
    image: electronics02,
    category: 'Electronics',
    rating: 4.6,
    reviews: 156,
    seller: 'ElectroWorld',
    description: 'High-performance gaming laptop with RTX graphics',
    inStock: true,
    isHotDeal: true
  },
  {
    id: '4',
    name: 'Televions',
    price: 1299,
    originalPrice: 1599,
    image: electronics03,
    category: 'Electronics',
    rating: 4.6,
    reviews: 156,
    seller: 'ElectroWorld',
    description: 'High-performance gaming laptop with RTX graphics',
    inStock: true,
    isHotDeal: true
  },
  {
    id: '5',
    name: 'Laptops',
    price: 1299,
    originalPrice: 1599,
    image: electronics04,
    category: 'Electronics',
    rating: 4.6,
    reviews: 156,
    seller: 'ElectroWorld',
    description: 'High-performance gaming laptop with RTX graphics',
    inStock: true,
    isHotDeal: true
  },
  {
    id: '6',
    name: 'Smart Refrigerator',
    price: 899,
    image: appliances01,
    category: 'Appliances',
    rating: 4.4,
    reviews: 89,
    seller: 'HomeAppliances Co',
    description: 'Energy-efficient smart refrigerator with WiFi connectivity',
    inStock: true,
    isFeatured: true
  },
  {
    id: '7',
    name: 'Mixers',
    price: 899,
    image: appliances02,
    category: 'Appliances',
    rating: 4.4,
    reviews: 89,
    seller: 'HomeAppliances Co',
    description: 'Energy-efficient smart refrigerator with WiFi connectivity',
    inStock: true,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Irons, Toasters and Mixers',
    price: 899,
    image: appliances03,
    category: 'Appliances',
    rating: 4.4,
    reviews: 89,
    seller: 'HomeAppliances Co',
    description: 'Energy-efficient smart refrigerator with WiFi connectivity',
    inStock: true,
    isFeatured: true
  },
  {
    id: '9',
    name: 'Washing Machine and Stoves',
    price: 899,
    image: appliances04,
    category: 'Appliances',
    rating: 4.4,
    reviews: 89,
    seller: 'HomeAppliances Co',
    description: 'Energy-efficient smart refrigerator with WiFi connectivity',
    inStock: true,
    isFeatured: true
  },
  {
    id: '10',
    name: 'Leather Business Bag',
    price: 129,
    originalPrice: 179,
    image: shoesbags,
    category: 'Bags & Shoes',
    rating: 4.7,
    reviews: 203,
    seller: 'Fashion Hub',
    description: 'Premium leather business bag for professionals',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '11',
    name: 'Leather Business Bag',
    price: 129,
    originalPrice: 179,
    image: shoesbags01,
    category: 'Bags & Shoes',
    rating: 4.7,
    reviews: 203,
    seller: 'Fashion Hub',
    description: 'Premium leather business bag for professionals',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '12',
    name: 'Leather Business Bag',
    price: 129,
    originalPrice: 179,
    image: shoesbags02,
    category: 'Bags & Shoes',
    rating: 4.7,
    reviews: 203,
    seller: 'Fashion Hub',
    description: 'Premium leather business bag for professionals',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '13',
    name: 'Leather Business Bag',
    price: 129,
    originalPrice: 179,
    image: shoesbags03,
    category: 'Bags & Shoes',
    rating: 4.7,
    reviews: 203,
    seller: 'Fashion Hub',
    description: 'Premium leather business bag for professionals',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '14',
    name: 'Skincare Set Premium',
    price: 89,
    image: beauty01,
    category: 'Beauty & Personal Care',
    rating: 4.5,
    reviews: 312,
    seller: 'Beauty Essentials',
    description: 'Complete skincare routine set with natural ingredients',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '15',
    name: 'Skincare Set Premium',
    price: 89,
    image: beauty02,
    category: 'Beauty & Personal Care',
    rating: 4.5,
    reviews: 312,
    seller: 'Beauty Essentials',
    description: 'Complete skincare routine set with natural ingredients',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '16',
    name: 'Skincare Set Premium',
    price: 89,
    image: beauty03,
    category: 'Beauty & Personal Care',
    rating: 4.5,
    reviews: 312,
    seller: 'Beauty Essentials',
    description: 'Complete skincare routine set with natural ingredients',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '17',
    name: 'Skincare Set Premium',
    price: 89,
    image: beauty04,
    category: 'Beauty & Personal Care',
    rating: 4.5,
    reviews: 312,
    seller: 'Beauty Essentials',
    description: 'Complete skincare routine set with natural ingredients',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '18',
    name: 'Car Engine Parts Kit',
    price: 299,
    image: carparts01,
    category: 'Car Parts',
    rating: 4.3,
    reviews: 67,
    seller: 'AutoParts Direct',
    description: 'Complete engine maintenance kit for most car models',
    inStock: true
  },
  {
    id: '19',
    name: 'Car Engine Parts Kit',
    price: 299,
    image: carparts02,
    category: 'Car Parts',
    rating: 4.3,
    reviews: 67,
    seller: 'AutoParts Direct',
    description: 'Complete engine maintenance kit for most car models',
    inStock: true
  },
  {
    id: '20',
    name: 'Car Engine Parts Kit',
    price: 299,
    image: carparts03,
    category: 'Car Parts',
    rating: 4.3,
    reviews: 67,
    seller: 'AutoParts Direct',
    description: 'Complete engine maintenance kit for most car models',
    inStock: true
  },
  {
    id: '21',
    name: 'Car Engine Parts Kit',
    price: 299,
    image: carparts04,
    category: 'Car Parts',
    rating: 4.3,
    reviews: 67,
    seller: 'AutoParts Direct',
    description: 'Complete engine maintenance kit for most car models',
    inStock: true
  },
  {
    id: '22',
    name: 'Modern Office Chair',
    price: 199,
    originalPrice: 249,
    image: furniture01,
    category: 'Furniture',
    rating: 4.6,
    reviews: 145,
    seller: 'Office Solutions',
    description: 'Ergonomic office chair with lumbar support',
    inStock: true,
    isFeatured: true
  },
  {
    id: '23',
    name: 'Modern Office Chair',
    price: 199,
    originalPrice: 249,
    image:furniture02,
    category: 'Furniture',
    rating: 4.6,
    reviews: 145,
    seller: 'Office Solutions',
    description: 'Ergonomic office chair with lumbar support',
    inStock: true,
    isFeatured: true
  },
  {
    id: '24',
    name: 'Modern Office Chair',
    price: 199,
    originalPrice: 249,
    image: furniture03,
    category: 'Furniture',
    rating: 4.6,
    reviews: 145,
    seller: 'Office Solutions',
    description: 'Ergonomic office chair with lumbar support',
    inStock: true,
    isFeatured: true
  },
  {
    id: '25',
    name: 'Modern Office Chair',
    price: 199,
    originalPrice: 249,
    image: furniture04,
    category: 'Furniture',
    rating: 4.6,
    reviews: 145,
    seller: 'Office Solutions',
    description: 'Ergonomic office chair with lumbar support',
    inStock: true,
    isFeatured: true
  },
  {
    id: '26',
    name: 'Educational Toy Set',
    price: 49,
    image: kids01,
    category: 'Kids & Toys',
    rating: 4.8,
    reviews: 89,
    seller: 'KidsWorld',
    description: 'Interactive educational toys for children aged 3-8',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '27',
    name: 'Educational Toy Set',
    price: 49,
    image: kids02,
    category: 'Kids & Toys',
    rating: 4.8,
    reviews: 89,
    seller: 'KidsWorld',
    description: 'Interactive educational toys for children aged 3-8',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '28',
    name: 'Educational Toy Set',
    price: 49,
    image: kids03,
    category: 'Kids & Toys',
    rating: 4.8,
    reviews: 89,
    seller: 'KidsWorld',
    description: 'Interactive educational toys for children aged 3-8',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '29',
    name: 'Educational Toy Set',
    price: 49,
    image: kids04,
    category: 'Kids & Toys',
    rating: 4.8,
    reviews: 89,
    seller: 'KidsWorld',
    description: 'Interactive educational toys for children aged 3-8',
    inStock: true,
    isNewArrival: true
  },
  {
    id: '30',
    name: 'Instrumentations',
    price: 45000,
    originalPrice: 52000,
    image:  machinery02,
    category: 'Machinery & Equipment',
    rating: 4.2,
    reviews: 24,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '31',
    name: 'Heavy Duty Eath Movers Equipment',
    price: 49000,
    originalPrice: 52000,
    image:  machinery03,
    category: 'Machinery & Equipment',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '32',
    name: 'Brick maker',
    price: 49000,
    originalPrice: 52000,
    image:  machinery04,
    category: 'Machinery & Equipment',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '33',
    name: 'Construction Material',
    price: 49000,
    originalPrice: 52000,
    image: hardware01,
    category: 'Tools & Hardware',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '34',
    name: 'House hold tools',
    price: 49000,
    originalPrice: 52000,
    image: hardware02,
    category: 'Tools & Hardware',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '35',
    name: 'Work shop tools',
    price: 49000,
    originalPrice: 52000,
    image: hardware03,
    category: 'Tools & Hardware',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '36',
    name: 'Industrials',
    price: 49000,
    originalPrice: 52000,
    image: hardware04,
    category: 'Tools & Hardware',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '37',
    name: 'Sport Kit',
    price: 49000,
    originalPrice: 52000,
    image: sport04,
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '38',
    name: 'Jersseys',
    price: 49000,
    originalPrice: 52000,
    image: sport02,
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '39',
    name: 'Bicyles',
    price: 49000,
    originalPrice: 52000,
    image: sport03,
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
    id: '40',
    name: 'Soccer Balls',
    price: 49000,
    originalPrice: 52000,
    image: sport01,
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 28,
    seller: 'TechMachinery Ltd',
    description: 'High-precision CNC machine for industrial manufacturing',
    inStock: true,
    isHotDeal: true,
    isFeatured: true
  },
  {
  id: '41',
  name: 'Oxygen Machine',
  price: 45000,
  originalPrice: 52000,
  image: medical01,
  category: 'Medical Equipment',
  rating: 4.6,
  reviews: 56,
  seller: 'TechMachinery Ltd',
  description: 'High-precision Oxygen machine for hospital use',
  inStock: true,
  isHotDeal: true,
  isFeatured: true
  },
  {
  id: '42',
  name: 'Blood Pressure Machine',
  price: 45000,
  originalPrice: 52000,
  image: medical02,
  category: 'Medical Equipment',
  rating: 5.6,
  reviews: 56,
  seller: 'TechMachinery Ltd',
  description: 'Hospital and Clinic Blood Pressure checker',
  inStock: true,
  isHotDeal: true,
  isFeatured: true
  },
  {
  id: '43',
  name: 'Microscope',
  price: 45000,
  originalPrice: 52000,
  image: medical03,
  category: 'Medical Equipment',
  rating: 5.6,
  reviews: 56,
  seller: 'TechMachinery Ltd',
  description: 'Microscope',
  inStock: true,
  isHotDeal: true,
  isFeatured: true
  },
  {
  id: '44',
  name: 'Stethoscope ',
  price: 45000,
  originalPrice: 52000,
  image: medical04,
  category: 'Medical Equipment',
  rating: 5.6,
  reviews: 56,
  seller: 'TechMachinery Ltd',
  description: 'High precision body checker',
  inStock: true,
  isHotDeal: true,
  isFeatured: true
  },
  {
  id: '45',
  name: 'Surgical Beds',
  price: 45000,
  originalPrice: 52000,
  image: medical05,
  category: 'Medical Equipment',
  rating: 5.6,
  reviews: 56,
  seller: 'TechMachinery Ltd',
  description: 'Surgical Beds for surgery operations',
  inStock: true,
  isHotDeal: true,
  isFeatured: true
  },
  {
  id: '46',
  name: 'Blood Pressure Cuff',
  price: 45000,
  originalPrice: 52000,
  image: medical04,
  category: 'Medical Equipment',
  rating: 5.6,
  reviews: 56,
  seller: 'TechMachinery Ltd',
  description: 'Blood Pressure check',
  inStock: true,
  isHotDeal: true,
  isFeatured: true
  }
];

export const dealOfTheDay = {
  id: 'deal-1',
  product: products[0],
  discount: 15,
  endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  title: 'Limited Time Offer!'
};