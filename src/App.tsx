import React from 'react';
import Header from 'components/Header';
import styled from '@emotion/styled';
import Shows from 'pages/Shows';
import LeftNav from 'lib/LeftNav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

function App() {
  return (
    <Container className='App'>
      <Header />
      <LeftNav>
        <Shows />
      </LeftNav>
    </Container>
  );
}

export default App;
