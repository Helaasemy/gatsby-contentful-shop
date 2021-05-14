import * as React from 'react';

import {useFeaturedData} from '../data/Featured';
import {CartProvider} from '../context/CartContext'

import Devider from '../components/Devider/Devider';
import Featured from '../components/Featured/Featured';

import Layout from '../components/Layout';

export default function IndexPage() {
const featuredData = useFeaturedData()
  return (
    <CartProvider>
    <Layout>
      <Featured data={featuredData}/>
      <Devider height="4"/>
    </Layout>
    </CartProvider>
  );
}
