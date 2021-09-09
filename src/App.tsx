import React from 'react';
import Header from 'components/Header';
import styled from '@emotion/styled';
import Shows from 'pages/Shows';

const Container = styled.div`
  height: 100vh;
  background-color: black;
`;

function App() {
  return (
    <Container className='App'>
      <Header />
      <Shows />
    </Container>
  );
}

export default App;
