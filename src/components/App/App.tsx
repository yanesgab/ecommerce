import { FunctionComponent } from 'react';
import { Router } from '../Router';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';

export const App: FunctionComponent = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Router />
    </>
  );
};
