import axios from 'axios';
import Product from './typeResponse';

const api = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');

    if (response.status === 200) {
      const products: Product[] = response.data.products;
      console.log('Products:', products);
      return products;
    } else {
      throw new Error('Failed to list products');
    }
  } catch (error) {
    console.error('Error listing products:', error);
    throw error;
  }
};

export default api;
