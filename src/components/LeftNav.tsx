import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Color } from 'types/theme';

const Container = styled.div`
  padding: 1rem;
  width: 250px;
  max-height: 100%;
  overflow-y: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const LeftNav: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default LeftNav;
