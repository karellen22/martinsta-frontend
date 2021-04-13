/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Header } from './components/Header';
import { Feed } from './components/Feed';
import { fontFamily, fontSize, gray2 } from './Styles';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <Feed />
    </div>
  );
}

export default App;
