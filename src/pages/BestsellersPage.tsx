import React from 'react';
import { getBestSellers } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const BestsellersPage = () => {
  const bestSellers = getBestSellers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Bestsellers</h1>
      <ProductGrid products={bestSellers} />
    </div>
  );
};

export default BestsellersPage; 