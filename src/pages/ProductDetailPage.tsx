import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '../data/products';
import Button from '../components/ui/Button';
import { FiArrowLeft, FiHeart } from 'react-icons/fi';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = id ? getProductById(id) : null;
  const relatedProducts = product ? getProductsByCategory(product.category) : [];

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="pb-16">
      {/* Navigation */}
      <div className="sticky top-0 bg-white z-10 p-4 border-b">
        <button onClick={() => navigate(-1)} className="p-2">
          <FiArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Product Images */}
      <div className="relative">
        <div className="aspect-square">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          <button className="p-2">
            <FiHeart className="w-6 h-6" />
          </button>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Size</h2>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Color</h2>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? 'border-black' : 'border-gray-200'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full mb-6">Add to Cart</Button>

        {/* Related Products */}
        <div>
          <h2 className="font-semibold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4">
            {relatedProducts
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="space-y-2 cursor-pointer"
                >
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm">{relatedProduct.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">
                      ${relatedProduct.price}
                    </span>
                    {relatedProduct.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ${relatedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;