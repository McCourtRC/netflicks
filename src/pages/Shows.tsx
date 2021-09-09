import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import ShowForm from 'components/ShowForm';
import ShowItem from 'components/ShowItem';
import ShowList from 'components/ShowList';
import { nth } from 'ramda';
import React, { Fragment } from 'react';
import { Show } from 'types/show';

interface AllShows {
  allShows: ShowsData;
}
interface ShowsData {
  data: Show[];
}

const GET_SHOWS = gql`
  {
    allShows {
      data {
        _id
        name
        asset {
          image
        }
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  max-height: 100%;
  overflow-y: auto;
`;

const Shows = () => {
  const { data, loading, error } = useQuery<AllShows>(GET_SHOWS);
  const shows = data?.allShows.data;

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  const selectItem = (index: number) => {
    const item = nth(index, shows || []);
    console.log('Selected', item?.name);
  };

  return (
    <Container>
      <ShowList shows={shows ?? []} onSelect={selectItem} />
      <ShowForm />
    </Container>
  );
};

export default Shows;
