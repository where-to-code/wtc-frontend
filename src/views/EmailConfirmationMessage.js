import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import thankYou from '../assets/thanks.svg';
import {
  StyledMessage,
  StyledConfirmationPage
} from './ViewStyles/EmailConfirmationMessageStyles';
import { setTempCookie } from '../components/helpers/authHelpers';

export default (props) => {

  // If the user get to this it means he sucessfully 
  // confirmed his email, so we set the temp Cookie to 
  // get him automatically logged in. However we have 
  // only partial data from BE that can be set to state ...
  // require BE upgrade for security and data integrity
  setTempCookie( {
    id: props.match.params, 
    isVerified: true
  }
  )
  return (
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
}