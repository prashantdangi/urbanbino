import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '../data/products';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductGrid from '../components/products/ProductGrid';
import { useCart } from '../context/CartContext';
import { Heart, Share2 } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '') || {
    id: '1',
    name: 'Product not found',
    price: 0,
    images: ['https://placehold.co/400x500'],
    category: '',
    tags: [],
    sizes: [],
    colors: []
  };
  
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id);
  
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, quantity, selectedSize, selectedColor);
      alert('Added to cart!');
    } else {
      alert('Please select a size');
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-[3/4] overflow-hidden mb-4">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`border-2 ${currentImageIndex === index ? 'border-black' : 'border-transparent'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-semibold mr-3">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through mr-3">${product.originalPrice.toFixed(2)}</span>
                  <Badge variant="sale">{product.discount}% OFF</Badge>
                </>
              )}
            </div>
            
            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3rem] px-3 py-2 text-center border ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 border ${
                        selectedColor === color 
                          ? 'border-black' 
                          : 'border-gray-300 hover:border-gray-900'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border border-gray-300 px-3 py-1"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-t border-b border-gray-300 w-16 py-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-300 px-3 py-1"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth 
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
              >
                <Heart size={20} className="mr-2" />
                Wishlist
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
              >
                <Share2 size={20} className="mr-2" />
                Share
              </Button>
            </div>
            
            {/* Product Description */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">Description</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, 
                nisl nisi aliquam nunc, quis aliquam nisl nisi quis nisl. Sed euismod, diam quis aliquam ultricies,
                nisl nisi aliquam nunc, quis aliquam nisl nisi quis nisl.
              </p>
            </div>
            
            {/* Details */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="text-lg font-medium mb-4">Details</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>100% premium cotton</li>
                <li>Tailored fit</li>
                <li>Machine wash cold</li>
                <li>Made in USA</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <ProductGrid products={relatedProducts.slice(0, 4)} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;