import React, { useEffect }from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import thankYou from '../assets/thanks.svg';
import {
  StyledMessage,
  StyledConfirmationPage
} from './ViewStyles/EmailConfirmationMessageStyles';
import { setTempCookie, getCookie } from '../components/helpers/authHelpers';
import { setCookieToState } from '../redux/actionCreators';

export default (props) => {

  // If the user get to this it means he sucessfully 
  // confirmed his email, so we set the temp Cookie to 
  // get him automatically logged in. However we have 
  // only partial data from BE that can be set to state ...
  // require BE upgrade for security and data integrity
  const userId =  Number(props.location.search.split('=')[1])
  console.log('userId', userId);

  useEffect (()=> {
    
      setTempCookie( {
        id: userId, 
        isVerified: true
      }
      );
      const cookieData = getCookie();
      setCookieToState(cookieData);  
    }
  ); 

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