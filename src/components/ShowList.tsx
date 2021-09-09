import React from 'react';
import LeftNav from 'components/LeftNav';
import { Show } from 'types/show';
import ShowItem from './ShowItem';

interface Props {
  shows: Show[];
  onSelect: (index: number) => void;
}

const ShowList = ({ shows, onSelect }: Props) => {
  return (
    <LeftNav>
      {shows.map((show, index) => {
        return (
          <ShowItem
            key={show._id}
            show={show}
            onClick={() => onSelect(index)}
          />
        );
      })}
    </LeftNav>
  );
};

export default ShowList;
