import React from 'react';
import { PictureCardData } from '../data/PictureCardData';

interface Props {
  data: PictureCardData;
}

export const PictureCard = ({ data }: Props) => (
  <div>
    <div>{data.pictureAuthor}</div>
    <div>
      <img src={data.pictureLocation} width="30%" alt="alt"></img>
    </div>
    <div>{`Created on ${data.created.toLocaleDateString()} at ${data.created.toLocaleTimeString()}`}</div>
    <div>{data.pictureDescription}</div>
    <div>
      {data.comments.map((comment, index) => {
        return (
          <li key={index}>
            <div>{comment.commentAuthor}</div>
            <div>{comment.content}</div>
            <div>
              Commented on {comment.created.toLocaleDateString()} at {comment.created.toLocaleTimeString()}
            </div>
          </li>
        );
      })}
    </div>
  </div>
);
