import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import BestsellersPage from './pages/BestsellersPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/mens" element={<MensPage />} />
          <Route path="/womens" element={<WomensPage />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/bestsellers" element={<BestsellersPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;