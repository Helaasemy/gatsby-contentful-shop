import React from 'react';
import styled from '@emotion/styled';
import CartIcon from '../../icons/Cart';
import Devider from '../Devider/Devider';
import Logo from '../../icons/Logo';

const Header = () => {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    .logo {
        align-self: center;
      }
  `;


  return (
    <>
      <Container>
        <Logo />
        <CartIcon />
      </Container>
      <div>
        <Devider />
      </div>
    </>
  );
};
export default Header;
