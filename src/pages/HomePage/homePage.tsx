import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import api from '../api/api';
import Product from '../api/typeResponse';
import Card from '@/components/Card/Card';

import * as Styled from './styles'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await api();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      <Header />
      <Styled.CardContainer>
        {products.map(product => (
          <Styled.CardWrapper key={product.id}>
            <Card product={product} />
          </Styled.CardWrapper>
        ))}
      </Styled.CardContainer>
      <Footer />
    </div>
  );
}
