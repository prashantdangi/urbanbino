import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Mens',
    image: '/photo6.jpg',
    slug: 'mens'
  },
  {
    id: '2',
    name: 'Womens',
    image: '/photo5.jpg',
    slug: 'womens'
  },
  {
    id: '3',
    name: 'Bestsellers',
    image: '/photo7.jpg',
    slug: 'bestsellers'
  },
  {
    id: '4',
    name: 'New Arrivals',
    image: '/photo8.jpg',
    slug: 'new-arrivals'
  },
];

export const products: Product[] = [
  // Men's items
  {
    id: '1',
    name: 'Classic Fit Oxford Shirt',
    price: 599,
    images: [
      '/photo11.jpg',
      '/photo12.jpg'
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
    price: 599,
    images: [
      '/photo13.jpg',
      '/photo14.jpg'
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
    price: 599,
    images: [
      '/photo 15.jpg',
      '/photo16.jpg'
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
    price: 599,
    images: [
      '/photo17.jpg',
      '/photo18.jpg'
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
    price: 599,
    images: [
      '/photo19.jpg',
      '/photo20.jpg'
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
    price: 599,
    images: [
      '/photo21.jpg',
      '/photo22.jpg'
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
    price: 599,
    images: [
      '/photo12.jpg',
      '/photo13.jpg'
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
    price: 599,
    images: [
      '/photo 14.jpg',
      '/photo15.jpg'
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
    price: 599,
    images: [
      '/photo16.jpg',
      '/photo17.jpg'
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
    price: 599,
    images: [
      '/photo18.jpg',
      '/photo19.jpg'
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
    price: 599,
    images: [
      '/photo20.jpg',
      '/photo21.jpg'
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
    price: 599,
    images: [
      '/photo22.jpg',
      '/photo11.jpg'
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