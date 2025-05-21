import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Mens',
    image: 'https://images.pexels.com/photos/7691086/pexels-photo-7691086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'mens'
  },
  {
    id: '2',
    name: 'Womens',
    image: 'https://images.pexels.com/photos/7691166/pexels-photo-7691166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'womens'
  },
  {
    id: '3',
    name: 'Bestsellers',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'bestsellers'
  },
  {
    id: '4',
    name: 'New Arrivals',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'new-arrivals'
  },
];

export const products: Product[] = [
  // Men's items
  {
    id: '1',
    name: 'Classic Fit Oxford Shirt',
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    images: [
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'mens',
    tags: ['Formal', 'Classic', 'New Arrival'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Black'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Slim Fit Chino Pants',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/5698859/pexels-photo-5698859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5698858/pexels-photo-5698858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'mens',
    tags: ['Casual', 'Slim Fit', 'Best Seller'],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Black'],
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Premium Denim Jacket',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'mens',
    tags: ['Denim', 'Jacket', 'Premium'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Casual Linen Shirt',
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    images: [
      'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'mens',
    tags: ['Casual', 'Linen', 'Summer'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'White', 'Light Blue'],
    isNew: true
  },
  {
    id: '5',
    name: 'Wool Blend Sweater',
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    images: [
      'https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'mens',
    tags: ['Winter', 'Wool', 'Premium'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Navy', 'Burgundy'],
    isBestSeller: true
  },
  {
    id: '6',
    name: 'Leather Derby Shoes',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    images: [
      'https://images.pexels.com/photos/7691086/pexels-photo-7691086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'mens',
    tags: ['Shoes', 'Leather', 'Formal'],
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black', 'Brown'],
    isFeatured: true
  },
  // Women's items
  {
    id: '7',
    name: 'Floral Summer Dress',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'womens',
    tags: ['Dress', 'Summer', 'New Arrival'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pink', 'Blue', 'White'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '8',
    name: 'High-Waisted Jeans',
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    images: [
      'https://images.pexels.com/photos/5698859/pexels-photo-5698859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5698858/pexels-photo-5698858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'womens',
    tags: ['Jeans', 'Casual', 'Best Seller'],
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Blue', 'Black', 'Light Wash'],
    isBestSeller: true
  },
  {
    id: '9',
    name: 'Cashmere Cardigan',
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'womens',
    tags: ['Cardigan', 'Winter', 'Premium'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Grey', 'Black'],
    isFeatured: true
  },
  {
    id: '10',
    name: 'Silk Blouse',
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    images: [
      'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'womens',
    tags: ['Blouse', 'Formal', 'Premium'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Black', 'Blush'],
    isNew: true
  },
  {
    id: '11',
    name: 'Pleated Midi Skirt',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'womens',
    tags: ['Skirt', 'Formal', 'Best Seller'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Burgundy'],
    isBestSeller: true
  },
  {
    id: '12',
    name: 'Leather Ankle Boots',
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    images: [
      'https://images.pexels.com/photos/7691086/pexels-photo-7691086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'womens',
    tags: ['Boots', 'Leather', 'Winter'],
    sizes: ['5', '6', '7', '8', '9'],
    colors: ['Black', 'Brown', 'Tan'],
    isFeatured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};