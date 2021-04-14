/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { PictureCardList } from './PictureCardList';
import { useParams } from 'react-router-dom';
import { Page } from './Page';
import { getUserPictures } from '../data/PictureCardData';

export const ProfilePage = () => {
  const { pictureAuthor } = useParams();
  const currentPicture = getUserPictures(pictureAuthor);

  return (
    <Page title="Profile Page">
      <React.Fragment>
        <PictureCardList data={currentPicture}></PictureCardList>
      </React.Fragment>
    </Page>
  );
};
