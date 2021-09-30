import React from 'react';
import Header from 'components/Header';
import styled from '@emotion/styled';
import Router from 'Router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <Router />
    </Container>
  );
}

export default App;
