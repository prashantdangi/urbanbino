import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { products } from '../data/products';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query && !recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev].slice(0, 5));
    }
  };

  return (
    <div className="p-4">
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:border-black"
        />
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <FiX className="text-gray-400" />
          </button>
        )}
      </div>

      {!searchQuery && recentSearches.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Recent Searches</h2>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handleSearch(search)}
                className="w-full text-left p-2 hover:bg-gray-100 rounded-lg"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}

      {searchQuery && (
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
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
              </div>
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage; 