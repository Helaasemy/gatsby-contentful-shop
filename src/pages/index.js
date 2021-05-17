import * as React from 'react';

import { useFeaturedData } from '../data/Featured';
import { useProductsData } from '../data/Products';
import { CartProvider } from '../context/CartContext';

import Devider from '../components/Devider/Devider';
import Featured from '../components/Featured/Featured';

import Layout from '../components/Layout';
import Product from '../components/Products/Products';

export default function IndexPage() {
  const featuredData = useFeaturedData();
  const productsData = useProductsData()
  return (
    <CartProvider>
      <Layout>
        <Featured data={featuredData} />
        <Devider height="4" />
        <Product products={productsData} />
      </Layout>
    </CartProvider>
  );
}
