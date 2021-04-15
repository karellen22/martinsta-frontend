/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import camera from '../assets/camera.svg';
import profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';
import home from '../assets/home.svg';

interface Props {
  currentUser?: string;
}

export const FeedIcon = () => (
  <Link to="martinsta-frontend/">
    <img
      src={home}
      alt="Feed"
      css={css`
        width: 28px;
        opacity: 0.6;
        margin-left: 15px;
        margin-right: 15px;
      `}
    />
  </Link>
);

export const UploadIcon = () => (
  <Link to="/martinsta-frontend/upload">
    <img
      src={camera}
      alt="Upload"
      css={css`
        width: 30px;
        opacity: 0.6;
        margin-left: 15px;
        margin-right: 15px;
      `}
    />
  </Link>
);

export const ProfileIcon = ({ currentUser }: Props) => {
  currentUser = 'Martin';
  return (
    <Link to={`/martinsta-frontend/profile/${currentUser}`}>
      <div>
        <img
          src={profile}
          alt="Profile"
          css={css`
            width: 30px;
            opacity: 0.6;
            margin-left: 15px;
            margin-right: 15px;
          `}
        />
      </div>
    </Link>
  );
};
