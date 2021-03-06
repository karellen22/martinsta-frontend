/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import camera from '../assets/camera.svg';
import profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';
import home from '../assets/home.svg';
import logo from '../assets/logo.png';

interface Props {
  currentUser?: string;
}

export const LogoIcon = () => (
  <Link to="/">
    <img
      src={logo}
      alt="Logo"
      css={css`
        width: 75px;
        opacity: 0.6;
        margin-left: 15px;
        margin-right: 15px;
      `}
    ></img>
  </Link>
);

export const FeedIcon = () => (
  <Link to="/">
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
  <Link to="/upload">
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
    <Link to={`/profile/${currentUser}`}>
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
