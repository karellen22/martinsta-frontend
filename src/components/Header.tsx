import React from 'react';
import { FeedIcon, ProfileIcon } from './Icons';

export const Header = () => (
  <div>
    <FeedIcon />
    <input type="text" placeholder="Search..." />
    <ProfileIcon />
  </div>
);
