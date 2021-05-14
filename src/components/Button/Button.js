import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const Button = ({ outlined, children, onClick }) => {
  const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    padding: 5px 24px;

    transition: background-color 0.2s ease-in-out;
    color: ${theme.colors.white};
    width: 100%;
    text-transform: uppercase;
    font-size: 23px;
    &:hover,
    &:active {
      cursor: pointer;
    }
    &:hover {
      background-color: ${theme.colors.grey10};
    }
    border: 2px solid ${theme.colors.black};

    ${outlined
    ? `
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          &:hover {
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
          }
        `
    : `
          background-color: ${theme.colors.black};
        `}
  `;
  return (
    <ButtonWrapper outlined={outlined} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
