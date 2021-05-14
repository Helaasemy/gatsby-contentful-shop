import React, {useState, useContext} from 'react';
import styled from '@emotion/styled';
import CartIcon from '../../icons/Cart';
import Devider from '../Devider/Devider';
import Logo from '../../icons/Logo';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { theme } from '../../theme';
import {CartContext} from '../../context/CartContext'



const Header = () => {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    .logo {
        align-self: center;
      }
    position: relative;
  `;
  const CartWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 62px;
    z-index: 10;
    border: 4px solid ${theme.colors.grey};
    width: 40vw;
    min-height: 50px;
    background: white;
    @media ${theme.breakPoints.max.sm} {
      width: 83vw;
    }
  `;
  const CartIconWrapper = styled.div`
  position: relative;
  div {
    background: black;
    position: absolute;
    color: white;
    font-weight: bold;
    bottom: -8px;
    right: -8px;  
    width: 20px;
    height: 20px;
    text-align: center;
    span {
      vertical-align: middle;
    }
  }
`;
  

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const showCart = () => {
    setOpen(false);
  }
  return (
    <>
      <Container>
        <Logo/>
        <CartIconWrapper>
          <CartIcon onClick={() => setOpen(prev => !prev)}/>
          <div><span>{cart.length}</span></div>
        </CartIconWrapper>
        {open &&    
      <CartWrapper>
       <ShoppingCart onClick={showCart}/>
      </CartWrapper>
        }
      </Container>
      <div>
        <Devider height='4' />
      </div>
    </>
  );
};
export default Header;
