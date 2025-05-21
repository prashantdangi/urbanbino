import React from 'react';
import { getNewArrivals } from '../data/products';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/products/ProductGrid';

const NewArrivalsPage: React.FC = () => {
  const newArrivals = getNewArrivals();
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-100">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">New Arrivals</h1>
            <p className="text-xl text-white mb-8">
              Discover our latest collection of fresh styles and trends
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newArrivals.map(product => (
            <ProductGrid key={product.id} products={[product]} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewArrivalsPage; 