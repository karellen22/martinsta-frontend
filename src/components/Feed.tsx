/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { PictureCardList } from '../components/PictureCardList';
import { getPictureCards } from '../data/PictureCardData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const Feed = () => {
  return (
    <Page>
      <div>
        {/* <PageTitle>Your Feed</PageTitle> */}
        <PictureCardList data={getPictureCards()} />
      </div>
    </Page>
  );
};
