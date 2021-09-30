import styled from '@emotion/styled';
import React from 'react';
import { Show } from 'types/show';
import { BoxShadow, Color } from 'types/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  /* background-color: ${Color.secondary}; */
  &:hover {
    ${BoxShadow.md}
    transform: scale(1.05, 1.05);
    cursor: pointer;
    & > img {
      ${BoxShadow.sm};
    }
  }
  transition: all 0.1s ease-out;
`;

const Img = styled.img`
  border-radius: 1rem;
  /* height: 120px; */
  overflow: hidden;
  object-fit: cover;
  ${BoxShadow.md}
`;

const Name = styled.span`
  font-size: large;
  padding: 0.5rem 1rem;
  color: ${Color.white};
`;

interface Props {
  show: Show;
  onClick: () => void;
}
const ShowItem = ({ show, onClick }: Props) => {
  const {
    name,
    asset: { image },
  } = show;
  return (
    <Container onClick={onClick}>
      <Img src={image} />
      <Name>{name}</Name>
    </Container>
  );
};

export default ShowItem;
