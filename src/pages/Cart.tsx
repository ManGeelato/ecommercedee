import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onRemoveFromCart }) => {
  const generateWhatsAppMessage = () => {
    let message = "Hello AfriVisionTech! I would like to request a quote for the following items:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   - Quantity: ${item.quantity}\n`;
      message += `   - Category: ${item.product.category}\n`;
      message += `   - Seller: ${item.product.seller}\n\n`;
    });
    
    message += "Please provide pricing and availability for these items. Thank you!";
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/27827763343?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-xl text-blue-100">Review your items and request a quote via WhatsApp</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  Cart Items ({cart.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-6 flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        by {item.product.seller}
                      </p>
                      <p className="text-sm text-gray-600">
                        Category: {item.product.category}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <button
                        onClick={() => onRemoveFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Quote Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quote Summary</h2>
              
              <div className="space-y-4 mb-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Total Items:</strong> {cart.reduce((total, item) => total + item.quantity, 0)}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Categories:</strong> {Array.from(new Set(cart.map(item => item.product.category))).join(', ')}
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-800">
                  <strong>Get instant quotes via WhatsApp!</strong> Our team will respond with pricing and availability within 24 hours.
                </p>
              </div>
              
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors mb-4 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Quote via WhatsApp
              </button>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Instant Response
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Best Prices
                  </span>
                </div>
              </div>
            </div>
            
            {/* Recommended Products */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">You might also like</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg"
                    alt="Recommended product"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Gaming Mouse Pro</p>
                    <p className="text-gray-600 text-sm">Electronics</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Add
                  </button>
                </div>
                
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg"
                    alt="Recommended product"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Wireless Headphones</p>
                    <p className="text-gray-600 text-sm">Electronics</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;