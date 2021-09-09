import React, { Fragment } from 'react';
import { Show } from 'types/show';
import ShowItem from './ShowItem';

interface Props {
  shows: Show[];
  onSelect: (index: number) => void;
}

const ShowList = ({ shows, onSelect }: Props) => {
  return (
    <Fragment>
      {shows.map((show, index) => {
        return (
          <ShowItem
            key={show._id}
            show={show}
            onClick={() => onSelect(index)}
          />
        );
      })}
    </Fragment>
  );
};

export default ShowList;
