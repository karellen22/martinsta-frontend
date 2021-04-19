/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray2, gray3 } from '../Styles';
import React, { ChangeEvent } from 'react';
import { PictureCardData, addCommentToPicture } from '../data/PictureCardData';
import { Link } from 'react-router-dom';

interface Props {
  data: PictureCardData;
}

export const PictureCard = ({ data }: Props) => {
  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState(data.comments);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
    // console.log('comment changed to: ' + comment);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('comment submitted' + comment + ' picture: ' + data.pictureId);
    addCommentToPicture(comment, data.pictureId);
    setComments(data.comments);
    setComment('');
  };

  return (
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <Link
        to={`/martinsta-frontend/profile/${data.pictureAuthor}`}
        css={css`
          text-decoration: none;
          color: ${gray2};
        `}
      >
        <div
          css={css`
            padding: 10px 20px;
            font-size: 20px;
            text-align: left;
            font-weight: bold;
          `}
        >
          {data.pictureAuthor}
        </div>
      </Link>
      <Link
        css={css`
          text-decoration: none;
          color: ${gray2};
        `}
        to={`/martinsta-frontend/picture/${data.pictureId}`}
      >
        <div>
          {data.pictureLocation === '' ? (
            // <p>{`${data.pictureBase64}`}</p>
            <img
              src={`${data.pictureBase64}`}
              alt="alt"
              css={css`
                width: 100%;
              `}
            />
          ) : (
            <img
              src={data.pictureLocation}
              alt="alt"
              // onClick={handlePictureOnClick}
              css={css`
                width: 100%;
              `}
            ></img>
          )}
        </div>
      </Link>
      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >{`Uploaded on ${data.created.toLocaleDateString()} at ${data.created.toLocaleTimeString()}`}</div>
      <div
        css={css`
          padding-bottom: 10px;
          font-size: 15px;
          color: ${gray2};
        `}
      >
        {data.pictureDescription}
      </div>
      <div>
        <div>Comments</div>
        {comments.map((comment, index) => {
          return (
            <li
              key={index}
              css={css`
                text-align: left;
                padding: 10px 20px;
                /* border-top: 1px;
              border-right: 0px;
              border-bottom: 0px;
              border-left: 0px;
              border-style: solid; */
                /* font-weight: bold; */
                /* display: flex; */
              `}
            >
              <div
                css={css`
                  display: flex;
                `}
              >
                <Link
                  to={`/martinsta-frontend/profile/${comment.commentAuthor}`}
                  css={css`
                    text-decoration: none;
                    color: ${gray2};
                  `}
                >
                  <div
                    css={css`
                      text-align: left;
                      font-weight: bold;
                      display: flex;
                      margin-right: 10px;
                    `}
                  >
                    {comment.commentAuthor}
                  </div>
                </Link>
                <div
                  css={css`
                    text-align: left;
                    /* font-weight: bold; */
                    display: flex;
                  `}
                >
                  {comment.content}
                </div>
              </div>

              <div
                css={css`
                  font-size: 12px;
                  font-style: italic;
                  color: ${gray3};
                  text-align: left;
                `}
              >
                Commented on {comment.created.toLocaleDateString()} at {comment.created.toLocaleTimeString()}
              </div>
            </li>
          );
        })}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            onChange={handleSearchChange}
            value={comment}
            css={css`
              width: 92%;
              border: none;
            `}
          ></input>
        </form>
      </div>
    </div>
  );
};
