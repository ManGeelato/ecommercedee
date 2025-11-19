import React, { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { CartItem } from "../types";

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onRemoveFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);
  const categories = Array.from(new Set(cart.map((i) => i.product.category))).join(", ");

  const cartDetails = cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.product.name}\n   - Quantity: ${item.quantity}\n   - Details: ${item.product.seller}\n   - Category: ${item.product.category}\n`
    )
    .join("\n");

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: `Hi Afrivision Tech, Kindly confirm quote request, pricing and availability for ${form.name} (${form.email})\n\nItems:\n${cartDetails}\n\nTotal Items: ${totalItems}\nCategories: ${categories} \nThank You!`,
    };

    try {
      await emailjs.send(
        "afrivisiontech", 
        "template_2fugzv6", 
        templateParams,
        "fYlUMJiARqPMdVy4G"
      );
      setFeedback("✅ Your quote request has been sent successfully!");
      setForm({ name: "", email: "" });
    } catch (error) {
      console.error(error);
      setFeedback("❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <p className="text-xl text-blue-100">Review your items and request a quote</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">Cart Items ({cart.length})</h2>
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
                      <h3 className="font-semibold text-gray-800 mb-1">{item.product.name}</h3>
                      {item.product.description && (
                        <p className="text-sm text-gray-500 line-clamp-2">{item.product.description}</p>
                      )}
                      <p className="text-sm text-blue-600 font-medium mb-1">
                        Features: {item.product.seller}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        Category: {item.product.category}
                      </p>
                      
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                        }
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-12 text-center font-semibold">{item.quantity}</span>

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

          {/* QUOTE SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quote Summary</h2>

              <div className="space-y-4 mb-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Total Items:</strong> {totalItems}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Categories:</strong> {categories}
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors mb-4 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Quote
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

            {/* Recommended Products (unchanged) */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">You might also like</h3>
              {/* keep your recommended items here */}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Request Quote</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Please fill in your details below. Your selected items will be included automatically.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                readOnly
                value={cartDetails}
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-2 text-sm h-32 resize-none"
              />

              {feedback && (
                <p
                  className={`text-sm ${
                    feedback.startsWith("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
