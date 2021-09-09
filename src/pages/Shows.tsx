import { useQuery, gql } from '@apollo/client';
import React from 'react';

interface AllShows {
  allShows: ShowsData;
}
interface ShowsData {
  data: Show[];
}

interface Show {
  _id: string;
  name: string;
}

const GET_SHOWS = gql`
  {
    allShows {
      data {
        _id
        name
      }
    }
  }
`;

const Shows = () => {
  const { data, loading, error } = useQuery<AllShows>(GET_SHOWS);
  const shows = data?.allShows.data;

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <div>
      {shows?.map((show) => {
        return <div key={show._id}>{show.name}</div>;
      })}
    </div>
  );
};

export default Shows;
