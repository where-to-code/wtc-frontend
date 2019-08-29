import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledMap,
  StyledLeftSection,
  StyledRegistration,
  TabletAndMobileHeader,
  StyleGit
} from './ViewStyles/RegistrationStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import gitHubIcon from '../assets/github.png';
import logo from '../assets/logo.png';

const Registration = () => {
  const [formState, updateFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [inputChangeState, updateInputChangeState] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleChange = e => {
    updateFormState({
      ...formState,
      [e.target.name]: e.target.value
    });

    updateInputChangeState({
      ...inputChangeState,
      [e.target.name]: true
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmPassword } = formState;

    // checks to see that all validation passes
    if (
      !/^[a-zA-Z-]{2,}$/.test(firstname) ||
      !/^[a-zA-Z-]{2,}$/.test(lastname) ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
      !/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/.test(password) ||
      password !== confirmPassword
    ) {
      return;
    }

    console.log(formState);
  };

  return (
    <>
      <TabletAndMobileHeader>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </TabletAndMobileHeader>
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
            {inputChangeState.firstname &&
              !/^[a-zA-Z-]{2,}$/.test(formState.firstname) && (
                <span>Must be above 2 characters and alphabet alone.</span>
              )}

            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formState.lastname}
              onChange={handleChange}
            />
            {inputChangeState.lastname &&
              !/^[a-zA-Z-]{2,}$/.test(formState.lastname) && (
                <span>Must be above 2 characters and alphabet alone.</span>
              )}

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            {inputChangeState.email &&
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                formState.email
              ) && <span>You have entered an invalid email address!</span>}

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            {inputChangeState.password &&
              !/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/.test(
                formState.password
              ) && (
                <span>
                  Must be between 6 and 15 characters and contain a number.
                </span>
              )}

            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
            />
            {inputChangeState.confirmPassword &&
              !(formState.confirmPassword === formState.password) && (
                <span>Does not match the password.</span>
              )}

            <button type="submit">Sign Up</button>
          </form>

          <div>
            <span></span>
            <p>Or sign up via</p>
            <span></span>
          </div>
          <StyleGit>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </StyleGit>
        </StyledLeftSection>
        <StyledMap>
          <Link to="/">
            <img src={logo} alt="Where-to-code" />
          </Link>
        </StyledMap>
      </StyledRegistration>
    </>
  );
};

export default Registration;
