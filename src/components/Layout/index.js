import React from 'react';

import styled from '@emotion/styled';
import Header from '../Header/Header';

export default function Layout({ children }) {
  const Container = styled.div({
    fontFamily: 'Archivo',
    margin: '0 5vw',
  });
  return (
    <Container>
      <Header />
      <main>
        {children}
      </main>
      <footer />
    </Container>
  );
}
