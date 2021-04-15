/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { PictureCardList } from '../components/PictureCardList';
import { getPictureCards, PictureCardData } from '../data/PictureCardData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const Feed = () => {
  // We store the pictures in this tate that we will show on the feed.
  const [pictures, setPictures] = React.useState<PictureCardData[]>([]);
  // Another state will indicate that the pictures are being fetched.
  // Since the pictures will be fetched immediately by the useEffect below,
  // we can safely set this state to true initially.
  const [picturesLoading, setPicturesLoading] = React.useState(true);

  // To get the pictures, we have to call them asynchronously.
  React.useEffect(() => {
    const doGetPictureCards = async () => {
      const pictures = await getPictureCards();
      // We have to change states after we got the pictures.
      // First we set the pictures state to the returned pictures array.
      setPictures(pictures);
      // Than we set the loading to false, since we have fetched the required data.
      setPicturesLoading(false);
    };
    doGetPictureCards();
  }, []);

  return (
    <Page>
      <div>{picturesLoading ? <div>Loading...</div> : <PictureCardList data={pictures} />}</div>
    </Page>
  );
};
