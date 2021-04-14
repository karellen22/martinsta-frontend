/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { Page } from './Page';
import { PictureCardList } from './PictureCardList';
import { searchPictures, PictureCardData } from '../data/PictureCardData';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('criteria') || '';
  const matches = searchPictures(search);

  return (
    <Page title="Search Results">
      <PictureCardList data={matches}></PictureCardList>
    </Page>
  );
};
