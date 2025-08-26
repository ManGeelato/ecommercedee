import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSearchModal from './components/ImageSearchModal';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';
import HotDeals from './pages/HotDeals';
import NewArrivals from './pages/NewArrivals';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import { Product, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isImageSearchOpen, setIsImageSearchOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleAddToWishlist = (product: Product) => {
    // Wishlist functionality removed as requested
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          cartItemsCount={cartItemsCount}
          onSearchToggle={() => {}}
          onImageSearchToggle={() => setIsImageSearchOpen(true)}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                cart={cart}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            } 
          />
          <Route path="/categories" element={<Categories />} />
          <Route 
            path="/category/:categoryId" 
            element={
              <CategoryPage 
                cart={cart}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            } 
          />
          <Route 
            path="/hot-deals" 
            element={
              <HotDeals 
                cart={cart}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            } 
          />
          <Route 
            path="/new-arrivals" 
            element={
              <NewArrivals 
                cart={cart}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        
        <ImageSearchModal
          isOpen={isImageSearchOpen}
          onClose={() => setIsImageSearchOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;