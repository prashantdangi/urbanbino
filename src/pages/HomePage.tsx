import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import NewArrivals from '../components/home/NewArrivals';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <NewArrivals />
      
      {/* Promotional Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN THE MOVEMENT</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get 10% off your first order when you sign up for our newsletter.
          </p>
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
          >
            SIGN UP NOW
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;