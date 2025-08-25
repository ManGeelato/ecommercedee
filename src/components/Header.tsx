import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Camera } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  onSearchToggle: () => void;
  onImageSearchToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onSearchToggle, onImageSearchToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-blue-600 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 +27 79 794 3335</span>
            <span className="hidden xl:inline">📧 info@afrivisiontech.co.za</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden xl:inline">Free Shipping on Orders Over R500</span>
            <span>🌍 Global Sourcing Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/AfriVisionTech Logo Design.png" 
                alt="AfriVisionTech" 
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
            <span className="text-xs sm:text-sm text-gray-500 ml-2 hidden sm:block">
              Your Global Technology Marketplace
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={onImageSearchToggle}
                className="px-4 py-3 bg-gray-100 border-t border-b border-gray-300 hover:bg-gray-200 transition-colors"
                title="Search by image"
              >
                <Camera className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={onSearchToggle}
                className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Search Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs mt-1 hidden sm:block">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button 
              onClick={onImageSearchToggle}
              className="px-3 py-2 bg-gray-100 border-t border-b border-gray-300 hover:bg-gray-200 transition-colors"
              title="Search by image"
            >
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={() => {
                onSearchToggle();
                setIsSearchOpen(false);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="bg-gray-50 border-t hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`font-medium transition-colors ${
                  location.pathname === '/categories' 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Categories
              </Link>
              <Link 
                to="/hot-deals" 
                className={`font-medium transition-colors ${
                  location.pathname === '/hot-deals' 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Hot Deals
              </Link>
              <Link 
                to="/new-arrivals" 
                className={`font-medium transition-colors ${
                  location.pathname === '/new-arrivals' 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                New Arrivals
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                to="/about" 
                className={`transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/" 
              className={`block py-3 px-2 rounded transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className={`block py-3 px-2 rounded transition-colors ${
                location.pathname === '/categories' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/hot-deals" 
              className={`block py-3 px-2 rounded transition-colors ${
                location.pathname === '/hot-deals' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Hot Deals
            </Link>
            <Link 
              to="/new-arrivals" 
              className={`block py-3 px-2 rounded transition-colors ${
                location.pathname === '/new-arrivals' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <div className="border-t pt-2 mt-2">
              <Link 
                to="/about" 
                className={`block py-3 px-2 rounded transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`block py-3 px-2 rounded transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            {/* Mobile Contact Info */}
            <div className="border-t pt-3 mt-3 text-sm text-gray-600 space-y-1">
              <div>📞 +27 79 794 3335</div>
              <div>📧 info@afrivisiontech.co.za</div>
              <div className="text-blue-600">Free Shipping on Orders Over R500</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;