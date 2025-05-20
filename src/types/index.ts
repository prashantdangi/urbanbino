export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color?: string;
}

export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
}