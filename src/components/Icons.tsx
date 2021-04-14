/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import camera from '../assets/camera.svg';
import profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';
import { gray2, gray3 } from '../Styles';

interface Props {
  currentUser?: string;
}

export const FeedIcon = () => (
  <Link to="martinsta-frontend/feed">
    <img
      src={camera}
      alt="Feed"
      css={css`
        width: 12px;
        opacity: 0.6;
      `}
    />
  </Link>
);

export const ProfileIcon = ({ currentUser }: Props) => {
  currentUser = 'Mia';
  return (
    <Link to={`/martinsta-frontend/profile/${currentUser}`}>
      <div>
        <img
          src={profile}
          alt="Profile"
          css={css`
            width: 12px;
            opacity: 0.6;
          `}
        />
      </div>
    </Link>
  );
};
