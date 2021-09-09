import { useQuery, gql } from '@apollo/client';
import { Show } from 'types/show';

interface Data {
  allShows: {
    data: Show[];
  };
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

const useShows = () => {
  const { data, ...rest } = useQuery<Data>(GET_SHOWS);
  const shows = data?.allShows.data ?? [];

  return { shows, ...rest };
};

export default useShows;
