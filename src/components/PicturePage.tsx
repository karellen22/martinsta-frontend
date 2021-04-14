/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router-dom';
import { PictureCardData, getSpecificPictureCard } from '../data/PictureCardData';
import { PictureCard } from './PictureCard';
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
