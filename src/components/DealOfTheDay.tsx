import React, { useState, useEffect } from 'react';
import { Clock, Star, ShoppingCart } from 'lucide-react';
import { dealOfTheDay } from '../data/products';

const DealOfTheDay: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = dealOfTheDay.endTime.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const discountedPrice = dealOfTheDay.product.price * (1 - dealOfTheDay.discount / 100);

  return (
    <section className="py-12 bg-gradient-to-r from-red-500 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">🔥 Deal of the Day</h2>
          <p className="text-xl text-red-100">Limited time offer - Don't miss out!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={dealOfTheDay.product.image}
                alt={dealOfTheDay.product.name}
                className="w-full h-80 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -{dealOfTheDay.discount}%
              </div>
            </div>
            
            <div className="p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-4">{dealOfTheDay.product.name}</h3>
              <p className="text-gray-600 mb-6">{dealOfTheDay.product.description}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(dealOfTheDay.product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  ({dealOfTheDay.product.reviews} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-green-600">
                    R{discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    R{dealOfTheDay.product.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  You save R{(dealOfTheDay.product.price - discountedPrice).toLocaleString()}
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">Time left:</span>
                  <div className="flex space-x-2">
                    <div className="bg-red-500 text-white px-3 py-1 rounded text-lg font-bold">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <span className="text-2xl">:</span>
                    <div className="bg-red-500 text-white px-3 py-1 rounded text-lg font-bold">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <span className="text-2xl">:</span>
                    <div className="bg-red-500 text-white px-3 py-1 rounded text-lg font-bold">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - Limited Stock!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;