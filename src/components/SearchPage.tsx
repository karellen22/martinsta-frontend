import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { Page } from './Page';
import { PictureCardList } from './PictureCardList';
import { searchPictures } from '../data/PictureCardData';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('criteria') || '';
  const matches = searchPictures(search);

  const pageTitle = 'Search Results for: ' + search;
  return (
    <Page title={pageTitle}>
      <PictureCardList data={matches}></PictureCardList>
    </Page>
  );
};
