import React from 'react';
import { getNewArrivals } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const NewArrivalsPage = () => {
  const newArrivals = getNewArrivals();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">New Arrivals</h1>
      <ProductGrid products={newArrivals} />
    </div>
  );
};

export default NewArrivalsPage; 