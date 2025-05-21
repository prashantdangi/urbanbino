import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/products';

const CategorySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-white">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <button 
              key={category.id} 
              onClick={() => navigate(`/${category.slug}`)}
              className="group block relative overflow-hidden rounded-lg aspect-[3/4] w-full text-left"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;