import React, { useState } from 'react';

import {
  StyledMap,
  StyledLeftSection,
  StyledRegistration,
} from './componentStyles/RegistrationStyle';
import gitHubIcon from '../assets/github.png';
import logo from '../assets/logo.png';

const Registration = () => {
  const [formState, updateFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e =>
    updateFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <StyledRegistration>
      <StyledLeftSection>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formState.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formState.lastname}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>

        <p>Or sign up via GitHub</p>
        <img src={gitHubIcon} alt="github" />
      </StyledLeftSection>
      <StyledMap>
        <img src={logo} alt="Where-to-code" />
      </StyledMap>
    </StyledRegistration>
  );
};

export default Registration;
