import React from 'react';

import {
  StyledMap,
  StyledLeftSection,
  StyledRegistration,
} from './componentStyles/RegistrationStyle';
import gitHubIcon from '../assets/github.png';
import logo from '../assets/logo.png';

const Registration = () => {
  return (
    <StyledRegistration>
      <StyledLeftSection>
        <h2>Create Account</h2>

        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Or sign up via GitHub
        </p>
        <img src={gitHubIcon} alt="github" />
      </StyledLeftSection>
      <StyledMap>
        <img src={logo} alt="Where-to-code" />
      </StyledMap>
    </StyledRegistration>
  );
};

export default Registration;
