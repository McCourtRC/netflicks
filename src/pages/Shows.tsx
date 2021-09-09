import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import ShowItem from 'components/ShowItem';
import ShowList from 'components/ShowList';
import LeftNav from 'lib/LeftNav';
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
    <LeftNav>
      <ShowList shows={shows ?? []} onSelect={selectItem} />
    </LeftNav>
  );
};

export default Shows;
