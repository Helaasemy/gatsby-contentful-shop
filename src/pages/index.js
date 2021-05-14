import * as React from 'react';

import {useFeaturedData} from '../data/Featured'

import Devider from '../components/Devider/Devider';
import Featured from '../components/Featured/Featured';

import Layout from '../components/Layout';

export default function IndexPage() {
const featuredData = useFeaturedData()
console.log(featuredData);
  return (
    <Layout>
      <Featured data={featuredData}/>
      <Devider/>
    </Layout>
  );
}
