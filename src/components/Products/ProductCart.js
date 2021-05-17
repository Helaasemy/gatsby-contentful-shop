import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styled from '@emotion/styled';
import Button from '../Button/Button';
import { theme } from '../../theme';



const ProductCart = ({products}) => {
  const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
  const Cart = styled.div`
 width: 282px; 
 height: 398px;
 background-image: url("${props => props.image}");
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 position: relative;
 button {
   position: absolute;
   bottom: 0; 
 }
`;

const CartWrapper = styled.div`
margin: 10px;
`;

  const BestSell = styled.div`
padding: 10px;
background-color: white;
position: absolute;
top: 0;
left: 0;
`;
const Details = styled.div`

`;
const [cart, setCart] = useContext(CartContext);
  const addToCart = (e) => {
    const product = e;
    setCart((currentState) => [...currentState, product]);
  };


  return (
    <>
      <Container>
      {products.map((item) => 
        <CartWrapper>
        <Cart image={item.node.image.file.url}>
          {item.node.bestseller && 
          <BestSell>
            Best Seller
          </BestSell>
          }
          <Button onClick={() => addToCart(item.node)}> Add to Cart </Button>
        </Cart>
        <Details>
          <p>{item.node.category}</p>
          <h2>{item.node.name}</h2>
          <h3>$ {item.node.price}</h3>

        </Details>
        </CartWrapper>

      )}

      </Container>
    </>
  );
};
export default ProductCart;
