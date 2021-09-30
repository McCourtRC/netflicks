import styled from '@emotion/styled';
import React from 'react';
import { Color } from 'types/theme';

const Container = styled.header`
  width: 100%;
  /* position: fixed; */
  top: 0;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: large;
  margin: 0;
  padding: 1rem 2rem;
  color: ${Color.primary};
  background-color: ${Color.secondary};
`;

const Header = () => {
  return (
    <Container>
      <Logo>Net Flicks</Logo>
    </Container>
  );
};

export default Header;
