import React, { useState } from 'react';
import { products } from '../data/products';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/products/ProductGrid';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  
  const categories = Array.from(new Set(products.map(p => p.category)));
  const sizes = Array.from(new Set(products.flatMap(p => p.sizes)));
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };
  
  // Filter products
  const filteredProducts = products.filter(product => {
    // If no categories are selected, show all products
    if (selectedCategories.length === 0 && selectedSizes.length === 0) {
      return true;
    }
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSize = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
    
    return matchesCategory && matchesSize;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default:
        return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
    }
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Products</h1>
          
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
            
            {/* Mobile Filter Toggle */}
            <button 
              className="lg:hidden flex items-center gap-2"
              onClick={() => setFilterOpen(true)}
            >
              <Filter size={20} />
              <span>Filter</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category}`}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Size Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 border ${
                        selectedSizes.includes(size) 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                  <span>to</span>
                  <input 
                    type="number" 
                    placeholder="Max" 
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={sortedProducts} />
          </div>
        </div>
        
        {/* Mobile Filters Slide-in */}
        {filterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
            <div className="bg-white w-4/5 max-w-md h-full overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center">
                  <SlidersHorizontal size={20} className="mr-2" />
                  <h2 className="text-xl font-semibold">Filters</h2>
                </div>
                <button 
                  onClick={() => setFilterOpen(false)}
                  className="text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-4 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`mobile-category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-category-${category}`}>{category}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Size Filter */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 border ${
                          selectedSizes.includes(size) 
                            ? 'border-black bg-black text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Price Range</h3>
                  <div className="flex items-center space-x-4">
                    <input 
                      type="number" 
                      placeholder="Min" 
                      className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    <span>to</span>
                    <input 
                      type="number" 
                      placeholder="Max" 
                      className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button 
                    className="px-4 py-2 border border-gray-300"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedSizes([]);
                    }}
                  >
                    Clear All
                  </button>
                  <button 
                    className="px-4 py-2 bg-black text-white"
                    onClick={() => setFilterOpen(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;