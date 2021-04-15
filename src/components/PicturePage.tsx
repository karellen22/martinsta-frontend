/** @jsxImportSource @emotion/react */
import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router-dom';
import { getSpecificPictureCard } from '../data/PictureCardData';
import { PictureCardList } from './PictureCardList';

export const PicturePage = () => {
  const { pictureId } = useParams();
  const currentPicture = getSpecificPictureCard(Number(pictureId));

  return (
    <Page title="Picture Page">
      <React.Fragment>
        <PictureCardList data={currentPicture}></PictureCardList>
      </React.Fragment>
    </Page>
  );
};
