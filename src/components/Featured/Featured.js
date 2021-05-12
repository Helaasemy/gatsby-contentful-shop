import React from 'react';

import Button from '../Button/Button'

import styled from '@emotion/styled';
import { theme } from '../../theme';


const Featured = () => {
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


    return (
        <>
            <Heading>
                <h1>Samurai King Resting</h1>
                <div>
                    <Button> add to cart </Button>
                </div>
            </Heading>
            <ImageWrapper>
                <img src="https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1621814400&Signature=dqc7r2EuGSLuIQ2-3c~GcqQ06IRH1I5-oAJDkZ1sQETf5ov-aYn5UfXu2VonF9KczI5m9YeK1ed4QfzP8IYAMZuBC5VMW2JfYVbhD8GXJDaW4YGWtwavoRtj75MsOcL~dYId1YNLC3UkECQpNDeKK-v3tk~3BDlW82p36vfWUd-9BYrnp0VDp8XRQZc4JFIKMnhHD~9L2nQ-FqiQphg6ALjf63pe4GzEUMI-TJFa1ZR~S9qzUttspCBkUnxv46qfOWbiIlBW8w0gfqRtnYiCD7IwrXyEQ2Vss--spGYAbohQ9NwaQ10rnV3oeelV5RpmPLIXkw8AE-Y~LsKeD9POsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" width="1000" />
                <h2>photo of the day</h2>
            </ImageWrapper>
            <DetailsWrapper>
                <Description>
                    <H2>About the Samurai King Resting</H2>
                    <h3>Pets</h3>
                    <P>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 

text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</P>
                </Description>
                <div>
                    <H2>People also buy</H2>
                    <SuggesImageWrapper>
                        <img src="https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1621814400&Signature=Z64Kev~PsHOxudnEnzMbx9uh4dIC~q2S329ngHNQstL6BKDfyLeB4YQfFZSjrh5L7Nm6dMdJT9k1sgiuMTLP71tYtslKUQoklpfv4zVUricm2rvV9J4A0mYy9BYdTPPDZ~IZ2snPV0cPziAleDMpM9cbN0xlchSshK0p6e~dNU6zP3-bNDojbopjKPgY4ODHvtuD4jx5wVavNxbb0NfBXEW4ry8M6DFc6ltNMwb~GdyJB3aoptG9nENqiMvF47J7ZaH1Eh9vEkIYuFinFeWn8fj0OEeDeEC9OcozQKDN37X9mOrOAYWPcSOrPx2wJZUq2tfGt8klf-1i2DkfO0c7fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        <img src="https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1621814400&Signature=Z64Kev~PsHOxudnEnzMbx9uh4dIC~q2S329ngHNQstL6BKDfyLeB4YQfFZSjrh5L7Nm6dMdJT9k1sgiuMTLP71tYtslKUQoklpfv4zVUricm2rvV9J4A0mYy9BYdTPPDZ~IZ2snPV0cPziAleDMpM9cbN0xlchSshK0p6e~dNU6zP3-bNDojbopjKPgY4ODHvtuD4jx5wVavNxbb0NfBXEW4ry8M6DFc6ltNMwb~GdyJB3aoptG9nENqiMvF47J7ZaH1Eh9vEkIYuFinFeWn8fj0OEeDeEC9OcozQKDN37X9mOrOAYWPcSOrPx2wJZUq2tfGt8klf-1i2DkfO0c7fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        <img src="https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1621814400&Signature=Z64Kev~PsHOxudnEnzMbx9uh4dIC~q2S329ngHNQstL6BKDfyLeB4YQfFZSjrh5L7Nm6dMdJT9k1sgiuMTLP71tYtslKUQoklpfv4zVUricm2rvV9J4A0mYy9BYdTPPDZ~IZ2snPV0cPziAleDMpM9cbN0xlchSshK0p6e~dNU6zP3-bNDojbopjKPgY4ODHvtuD4jx5wVavNxbb0NfBXEW4ry8M6DFc6ltNMwb~GdyJB3aoptG9nENqiMvF47J7ZaH1Eh9vEkIYuFinFeWn8fj0OEeDeEC9OcozQKDN37X9mOrOAYWPcSOrPx2wJZUq2tfGt8klf-1i2DkfO0c7fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    </SuggesImageWrapper>
                    <div>
                        <H2>Details</H2>
                        <P>Size: 1020 x 1020 pixel</P>
                        <P>Size: 15 mb</P>
                    </div>
                </div>
            </DetailsWrapper>
        </>
    );
};

export default Featured;