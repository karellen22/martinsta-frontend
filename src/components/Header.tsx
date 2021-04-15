/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2, gray5 } from '../Styles';
import React, { ChangeEvent } from 'react';
import { FeedIcon, ProfileIcon, UploadIcon } from './Icons';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get('criteria') || '';
  const navigate = useNavigate();
  const [search, setSearch] = React.useState(criteria);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('navigating to :/martinsta-frontend/search?criteria=' + search);
    const modifiedSearchCriteria = search.replace('#', '');
    navigate('/martinsta-frontend/search?criteria=' + modifiedSearchCriteria);
  };
  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <FeedIcon />
      <UploadIcon />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          css={css`
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: white;
            width: 200px;
            height: 30px;
            margin-left: 15px;
            margin-right: 15px;
            :focus {
              outline-color: ${gray5};
            }
          `}
        />
      </form>
      <ProfileIcon />
    </div>
  );
};
