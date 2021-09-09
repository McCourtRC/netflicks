import styled from '@emotion/styled';
import React from 'react';
import { Show } from 'types/show';
import { Color } from 'types/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  /* background-color: ${Color.secondary}; */
  &:hover {
    box-shadow: 0 5px 10px -1px #05000076;
    transform: scale(1.05, 1.05);
    cursor: pointer;
    & > img {
      box-shadow: 0 2px 8px -1px #05000076;
    }
  }
  transition: all 0.1s ease-out;
`;

const Img = styled.img`
  border-radius: 1rem;
  /* height: 120px; */
  overflow: hidden;
  object-fit: cover;
  box-shadow: 0 5px 10px -1px #0500006e;
`;

const Name = styled.span`
  font-family: 'Urbanist';
  font-size: large;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: ${Color.secondary};
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
