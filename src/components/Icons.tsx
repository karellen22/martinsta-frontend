/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import camera from '../assets/camera.svg';
import profile from '../assets/profile.svg';

export const FeedIcon = () => (
  <a href="./">
    <img
      src={camera}
      alt="Feed"
      css={css`
        width: 12px;
        opacity: 0.6;
      `}
    />
  </a>
);

export const ProfileIcon = () => (
  <a href="./profile">
    <img
      src={profile}
      alt="Profile"
      css={css`
        width: 12px;
        opacity: 0.6;
      `}
    />
  </a>
);
