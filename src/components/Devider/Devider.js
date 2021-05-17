import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const Devider = (height) => {
  const Hr = styled.hr`
  height: ${height.height}px;
  width: 100%;
  background-color: ${theme.colors.grey};
  border: none;
  `;

  return (
    <Hr />
  );
};
export default Devider;
