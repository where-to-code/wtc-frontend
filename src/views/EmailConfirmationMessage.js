import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import thankYou from '../assets/thank-you.svg';

export default () => (
  <>
    <Header />
    <div>
      <img src={thankYou} alt="thank_you" />
      <p>Your email has been confirmed successfully</p>
      <Link to="/">
        <button>Continue</button>
      </Link>
    </div>
  </>
);
