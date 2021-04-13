import React from 'react';
import camera from '../assets/camera.svg';
import profile from '../assets/profile.svg';

export const FeedIcon = () => (
  <a href="./">
    <img src={camera} alt="Feed" width="26px" />
  </a>
);

export const ProfileIcon = () => (
  <a href="./profile">
    <img src={profile} alt="Profile" width="26px" />
  </a>
);
