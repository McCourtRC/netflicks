import React from 'react';
import styled from '@emotion/styled';
import { nth } from 'ramda';
import ShowForm from 'components/ShowForm';
import ShowList from 'components/ShowList';
import useShows from 'hooks/useShows';

const Container = styled.div`
  display: flex;
  gap: 4rem;
  max-height: 100%;
  overflow-y: auto;
`;

const Shows = () => {
  const { shows, loading, error } = useShows();

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  const selectItem = (index: number) => {
    const item = nth(index, shows);
    console.log('Selected', item?.name);
  };

  return (
    <Container>
      <ShowList shows={shows} onSelect={selectItem} />
      <ShowForm />
    </Container>
  );
};

export default Shows;
