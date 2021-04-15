/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { PictureCardData } from '../data/PictureCardData';
import { PictureCard } from './PictureCard';
import { accent2 } from '../Styles';

interface Props {
  data: PictureCardData[];
}

export const PictureCardList = ({ data }: Props) => (
  <ul>
    {data.map((picture) => (
      <div
        key={picture.pictureId}
        css={css`
          text-align: center;
          list-style: none;
          margin: 10px 0 0 0;
          padding: 0px 0px;
          background-color: #fff;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          /* border-top: 3px solid ${accent2}; */
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <PictureCard data={picture} />
      </div>
    ))}
  </ul>
);
