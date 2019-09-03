import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import thankYou from '../assets/thanks.svg';
import {
  StyledMessage,
  StyledConfirmationPage,
} from './ViewStyles/EmailConfirmationMessageStyles';

export default () => (
  <StyledConfirmationPage>
    <Header />
    <StyledMessage>
      <img src={thankYou} alt="thank_you" />
      <p>Your email has been confirmed successfully.</p>
      <Link to="/">
        <button>Continue to homepage</button>
      </Link>
    </StyledMessage>
  </StyledConfirmationPage>
);
