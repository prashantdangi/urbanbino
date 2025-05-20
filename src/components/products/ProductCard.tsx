import React, { useState } from 'react';
import { Product } from '../../types';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id, name, price, originalPrice, discount, images, isNew } = product;
  
  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentImageIndex(1);
    }
  };
  
  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };
  
  return (
    <a 
      href={`/product/${id}`} 
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative rounded-lg overflow-hidden aspect-[3/4] mb-4">
        <img 
          src={images[currentImageIndex]} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Product badges */}
        {isNew && (
          <div className="absolute top-3 left-3">
            <Badge variant="new">NEW</Badge>
          </div>
        )}
        
        {discount && (
          <div className="absolute top-3 right-3">
            <Badge variant="sale">{discount}% OFF</Badge>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {name}
        </h3>
        
        <div className="mt-1 flex items-center">
          <span className="text-lg font-semibold mr-2">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;