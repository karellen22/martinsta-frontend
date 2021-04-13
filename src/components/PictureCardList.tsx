import React from 'react';
import { PictureCardData } from '../data/PictureCardData';
import { PictureCard } from './PictureCard';

interface Props {
  data: PictureCardData[];
}

export const PictureCardList = ({ data }: Props) => (
  <ul>
    {data.map((picture) => (
      <li key={picture.pictureId}>
        <PictureCard data={picture} />
      </li>
    ))}
  </ul>
);
