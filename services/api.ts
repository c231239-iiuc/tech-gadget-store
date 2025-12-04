import { Product } from '../types';

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=12`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};