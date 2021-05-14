import React, { useContext } from 'react';
import styled from '@emotion/styled';
import CloseIcon from '../../icons/CloseIcon';
import Devider from '../Devider/Devider';
import Button from '../Button/Button';
import { theme } from '../../theme';
import {CartContext} from '../../context/CartContext'



const ShoppingCart = ({onClick}) => {
  const CartContainer = styled.div`
   position: relative;
   padding: 10px
  `;
  const Icon = styled.div`
    .close-icon{
        position: absolute;
        right: 0;
        padding: 10px ;
        &:hover {
            cursor: pointer;
            
          }
    }
  `;
  const CartDetailsWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: 40px 0px 0px 10px;
  img{
      max-height: 68px;
  }
 `;
 const Title = styled.h2`
 font-size: 20px;
 margin-top: 0;
  
 `;
 const Price = styled.p`
 margin-top: 0;
 color: ${theme.colors.greyDark};
 font-size: 21px;
  
 `;

const [cart, setCart] = useContext(CartContext);

  return (
    <>
     <CartContainer>
        <Icon onClick={onClick}>
            <CloseIcon/>
        </Icon>
        {cart? cart.map((item, index) => 
        <CartDetailsWrapper key={index}>
            <div>
                <Title>{item.data.name}</Title>
                <Price>${item.data.price}</Price>
            </div>
            <img src={item.data.image.file.url} alt={item.data.name} />
        </CartDetailsWrapper>
        ) : <p>cart is empty</p>}
        <Devider height="1"/>
        <Button outlined onClick={() => setCart('')}> Clear </Button>
     </CartContainer>
    </>
  );
};
export default ShoppingCart;
