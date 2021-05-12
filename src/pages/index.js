import * as React from 'react';
import Devider from '../components/Devider/Devider';
import Featured from '../components/Featured/Featured';

import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <Featured/>
      <Devider/>
    </Layout>
  );
}
