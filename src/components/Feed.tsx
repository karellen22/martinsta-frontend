import React from 'react';
import { PictureCardList } from '../components/PictureCardList';
import { getPictureCards } from '../data/PictureCardData';

export const Feed = () => (
  <div>
    <PictureCardList data={getPictureCards()} />
  </div>
);
