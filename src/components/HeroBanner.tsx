import React, { useState, useEffect } from "react";
import { ChevronRight, Truck, Shield, Headphones, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();

  const images = [
    "/Ventilator CH3000.PNG",
    "/Ultrasound Scanner CM300.PNG",
    "/TH RBIT 34RR045S HD.PNG",
    "/Three Phase Brake Motors.PNG",
    "/Ultrasound Scanner CW500.PNG",
    "/Thermoplastic Centrifugal Pump.PNG",
    "/16 Channel Security Camera System, 4K AI IP Cameras w Motorized Zoom.PNG",
    "/Heavy Duty Sewage Pump.PNG",
    "/Energy Efficient Three Phase Motor.PNG",
    "/TH RBIT 28R038M.PNG",
    "/End Suction Fire Pump FLBS.PNG",
    "/CastIron Submersible Pump.jpg",
    "/Auto-Tracking PTZ Camera 40 Zoom.JPG",
    "/TH RBIT 34RR048S.PNG",
    "/Auto-Tracking PTZ Camera 25 Zoom.JPG",
    "/32Channel NVR Camera System w16 Dome.JPG",
    "/32ch NVR System, 4k 8mp AI Security Cameras Dome Infrared PoE, Audio.PNG",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your Global Marketplace for Diversified
              <span className="text-yellow-300"> Products</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              From cutting-edge medical products to industrial solutions, discover innovative products 
              from trusted suppliers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={() => navigate("/categories")} className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Categories
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button onClick={() => navigate("/contact")} className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Truck className="w-8 h-8 text-yellow-300 mr-3" />
                <div>
                  <p className="font-semibold">Trusted Services and Deliveries</p>
                  <p className="text-sm text-blue-200">Globally</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-yellow-300 mr-3" />
                <div>
                  <p className="font-semibold">Secure Payment</p>
                  <p className="text-sm text-blue-200">100% Protected</p>
                </div>
              </div>
              <div className="flex items-center">
                <Headphones className="w-8 h-8 text-yellow-300 mr-3" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-sm text-blue-200">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="w-8 h-8 text-yellow-300 mr-3" />
                <div>
                  <p className="font-semibold">Global Sourcing</p>
                  <p className="text-sm text-blue-200">Worldwide delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ROTATING IMAGE */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img
                src={images[index]}
                alt="Global marketplace rotating"
                className="w-full h-80 object-contain bg-white p-2 rounded-xl transition-opacity duration-700"
              />

              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">1M+ Products</p>
                <p className="text-sm">Trusted Sellers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
