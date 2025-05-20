import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'T-Shirts',
    image: 'https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'tshirts'
  },
  {
    id: '2',
    name: 'Hoodies',
    image: 'https://images.pexels.com/photos/7691166/pexels-photo-7691166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'hoodies'
  },
  {
    id: '3',
    name: 'Pants',
    image: 'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'pants'
  },
  {
    id: '4',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'accessories'
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Urban Streetwear Tee',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'T-Shirts',
    tags: ['Urban', 'Casual', 'New Arrival'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Downtown Hoodie',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/5698859/pexels-photo-5698859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5698858/pexels-photo-5698858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Hoodies',
    tags: ['Urban', 'Casual', 'Winter'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey'],
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Metro Cargo Pants',
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    images: [
      'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Pants',
    tags: ['Urban', 'Casual', 'Streetwear'],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Olive', 'Black'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Urban Cap',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    images: [
      'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Accessories',
    tags: ['Urban', 'Caps', 'Streetwear'],
    sizes: ['One Size'],
    colors: ['Black', 'Grey', 'Navy'],
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Street Culture Tee',
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    images: [
      'https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'T-Shirts',
    tags: ['Street', 'Culture', 'Graphic'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
    isNew: true
  },
  {
    id: '6',
    name: 'Urban Bomber Jacket',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    images: [
      'https://images.pexels.com/photos/7691086/pexels-photo-7691086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Hoodies',
    tags: ['Jacket', 'Urban', 'Premium'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Olive'],
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