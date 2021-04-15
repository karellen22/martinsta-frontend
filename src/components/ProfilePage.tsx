/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { PictureCardList } from './PictureCardList';
import { useParams } from 'react-router-dom';
import { Page } from './Page';
import { getUserPictures, PictureCardData } from '../data/PictureCardData';

export const ProfilePage = () => {
  const { pictureAuthor } = useParams();
  // const currentPicture = getUserPictures(pictureAuthor);

  const [pictures, setPictures] = React.useState<PictureCardData[]>([]);
  const [picturesLoading, setPicturesLoading] = React.useState(true);

  React.useEffect(() => {
    const doGetPictureCards = async () => {
      const pictures = await getUserPictures(pictureAuthor);
      setPictures(pictures);
      setPicturesLoading(false);
    };
    doGetPictureCards();
  }, [pictureAuthor]);

  return (
    <Page title="Profile Page">
      <React.Fragment>
        {picturesLoading ? (
          <div
            css={css`
              text-align: center;
            `}
          >
            Loading user profile...
          </div>
        ) : (
          <PictureCardList data={pictures}></PictureCardList>
        )}
      </React.Fragment>
    </Page>
  );
};
