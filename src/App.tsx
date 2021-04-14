/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Header } from './components/Header';
import { Feed } from './components/Feed';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PicturePage } from './components/PicturePage';
import { SearchPage } from './components/SearchPage';
import { ProfilePage } from './components/ProfilePage';
import { NotFoundPage } from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="martinsta-frontend" element={<Feed />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="picture" element={<PicturePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
