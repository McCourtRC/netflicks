import styled from '@emotion/styled';
import React from 'react';
import { Color } from 'types/theme';

const Container = styled.header`
  background-color: ${Color.black};
`;

const Logo = styled.h1`
  margin: 0;
  padding: 1rem;
  color: ${Color.primary};
`;

const Header = () => {
  return (
    <Container>
      <Logo>Net Flicks</Logo>
    </Container>
  );
};

export default Header;
