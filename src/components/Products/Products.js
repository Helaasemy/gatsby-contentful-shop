import React, {useState} from 'react';
import ProductCart from './ProductCart';
import Checkbox from '../Checkbox/Checkbox';
import Devider from '../Devider/Devider';
import { useCategories } from '../../data/Categories';

import styled from '@emotion/styled';
import { theme } from '../../theme';

const Product = ({ products }) => {
  const categories = useCategories();

  const handleCheckboxChange = { 
    
  }

  const ProductWrapper = styled.div`
  display: flex;
  `;
  const FilterWrapper = styled.div`
    width: 35%;
  `;
  return (
    <ProductWrapper>
      <FilterWrapper>
        <h2>Categories</h2>
        {categories.map((item) =>
          <Checkbox label={item.title} onChange={handleCheckboxChange} />
        )}
        <Devider height='3' />
        <h2>Price range</h2>
        <Checkbox label='Lower than $20' />
        <Checkbox label=' $20 - $100' />
        <Checkbox label='$100 - $200' />
        <Checkbox label='More than $200' />

      </FilterWrapper>
      <ProductCart products={products} />
    </ProductWrapper>
  );
};
export default Product;
