import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import CategorySection from '../components/home/CategorySection';

const coverImages = [
  '/photo1.jpg',
  '/photo2.jpg',
  '/photo3.jpg',
  '/photo4.jpg'
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === coverImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Cover Photos */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        {coverImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Cover ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Featured Categories */}
      <CategorySection />

      {/* Latest Products */}
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="space-y-2 cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">₹{product.price}</span>
                <span className="text-gray-500 line-through text-sm">₹999</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;