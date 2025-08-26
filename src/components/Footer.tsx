import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/AfriVisionTech Logo Design.png" 
                alt="AfriVisionTech" 
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted global technology marketplace connecting buyers and sellers worldwide. 
              From industrial technology to consumer electronics, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Seller Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become a Seller</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seller Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Request Quote</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seller Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Global Sourcing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customs & Shipping</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+27 87 163 4634</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@afrivisiontech.co.za</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Johannesburg, South Africa</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">WhatsApp Support</h5>
              <a 
                href="https://wa.me/27797943335" 
                className="inline-flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Chat with us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AfriVisionTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;