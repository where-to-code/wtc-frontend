import React from 'react';

import Header from '../components/Header';
import notFound from '../assets/error-404.svg';
import { NotFoundPage, NotFoundMessage } from './ViewStyles/404Styles';

export default props => (
  <NotFoundPage>
    <Header {...props} />
    <NotFoundMessage>
      <img src={notFound} alt="404 not found" />
      <h2>Page Not Found</h2>
    </NotFoundMessage>
  </NotFoundPage>
);
