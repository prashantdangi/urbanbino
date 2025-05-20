import React from 'react';
import { getNewArrivals } from '../../data/products';
import ProductCard from '../products/ProductCard';

const NewArrivals: React.FC = () => {
  const newArrivals = getNewArrivals();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The latest additions to our collection. Be the first to shop these fresh styles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/products?filter=new-arrivals" 
            className="inline-block px-6 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
          >
            View All New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;