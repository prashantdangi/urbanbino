import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import BestsellersPage from './pages/BestsellersPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import BottomNav from './components/layout/BottomNav';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <main className="flex-grow max-w-md mx-auto w-full relative pb-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mens" element={<MensPage />} />
              <Route path="/womens" element={<WomensPage />} />
              <Route path="/new-arrivals" element={<NewArrivalsPage />} />
              <Route path="/bestsellers" element={<BestsellersPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;