import React from 'react';
import { Globe, Users, Award, Truck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About AfriVisionTech</h1>
          <p className="text-xl text-blue-100">Your trusted global technology marketplace connecting buyers and sellers worldwide</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              AfriVisionTech was founded with a simple mission: to create a comprehensive global technology marketplace 
              that connects businesses and consumers with innovative products from trusted suppliers worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              From cutting-edge technology to industrial solutions, we've built a platform that serves 
              both B2B and B2C markets, offering everything from heavy-duty equipment to everyday essentials.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, security, and customer satisfaction has made us a trusted 
              partner for thousands of businesses and millions of consumers globally.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Global marketplace"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Global Reach</h3>
            <p className="text-gray-600">Serving customers in over 50 countries worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1M+ Users</h3>
            <p className="text-gray-600">Trusted by millions of buyers and sellers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality First</h3>
            <p className="text-gray-600">Rigorous quality control and seller verification</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Efficient logistics and global shipping solutions</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To democratize global trade by providing a secure, efficient, and user-friendly platform 
            that empowers businesses of all sizes to reach new markets and customers to access 
            quality products from around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;