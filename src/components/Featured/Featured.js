import React from 'react';

import Button from '../Button/Button'

import styled from '@emotion/styled';
import { theme } from '../../theme';


const Featured = ({data}) => {
    const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-weight: bold;
        font-size: 32px;
    }
    div{
        max-width: 257px;
    }
  `;
  const H2 = styled.div`
  font-size: 20px;
  margin: 24px 0;
  font-weight: bold;
`;
    const ImageWrapper = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
      h2 {
        position: absolute;
        background-color: ${theme.colors.white};
        bottom: 0;
        margin: 0;
        font-size: 20px;
        padding: 15px 40px;
        font-weight: bold;
      }
  `;
    const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
    const Description = styled.div`
    h3 {
        font-size: 22px;
        font-weight: bold;
        color: ${theme.colors.greyDark}
    }
`;
    const P = styled.p`
        font-size: 18px;
        max-width: 50vw;
        color: ${theme.colors.greyDark}
    `
    const SuggesImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 122px;
    width: 97px;
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        margin-left: 5px;
        :hover {
          cursor: pointer;
        }
      }
`;

    const image1 = data.detail.recommondation.image.file.url;
    const image2 = data.detail.recommondation.image2.file.url;
    const image3 = data.detail.recommondation.image3.file.url;

    return (
        <>
            <Heading>
                <h1>{data.name}</h1>
                <div>
                    <Button> add to cart </Button>
                </div>
            </Heading>
            <ImageWrapper>
                <img src={data.image.file.url} alt={data.name}/>
                <h2>photo of the day</h2>
            </ImageWrapper>
            <DetailsWrapper>
                <Description>
                    <H2>About the {data.name}</H2>
                    <h3>{data.category}</h3>
                    <P>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 

text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</P>
                </Description>
                <div>
                    <H2>People also buy</H2>
                    <SuggesImageWrapper>
                        <img src={image1} />
                        <img src={image2} />
                        <img src={image3} />
                    </SuggesImageWrapper>
                    <div>
                        <H2>Details</H2>
                        <P>Size: {data.detail.dimmentions.height} x {data.detail.dimmentions.width} pixel</P>
                        <P>Size: {data.detail.size} b</P>
                    </div>
                </div>
            </DetailsWrapper>
        </>
    );
};

export default Featured;