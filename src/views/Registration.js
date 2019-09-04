import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { setTempCookie } from '../components/helpers/authHelpers';
import {
  StyledLeftSection,
  StyledRegistration,
  StyleGit,
  StyleMap,
  StyledWrapper
} from './ViewStyles/AuthStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signup } from '../redux/actionCreators';
import logo from '../assets/logo.png';

const Registration = props => {
  const { signup, loading, error } = props;
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
    signup(formState).then(res => {
      if (res.status === 201) {
        // since the user is automatically looged in after sigin up 
        // we set the cookie to flag the auth
        setTempCookie(res.data.data.id, res.data.data.lastname);
        props.history.push('/');
      }
    });
  };

  return (
    <StyledWrapper>
      <StyleMap>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </StyleMap>
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

            <button type="submit">
              {loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Sign Up'
              )}
            </button>
            {error && <div>{error}</div>}
          </form>

          <div>
            <span></span>
            <p>Or sign up via</p>
            <span></span>
          </div>
          <StyleGit>
            <a href="https://github.com/login/oauth/authorize?client_id=86d82ca50b3aad5948e7">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </StyleGit>

          <span>
            Already have an account? <Link to="/login"> Login</Link>
          </span>
        </StyledLeftSection>
      </StyledRegistration>
    </StyledWrapper>
  );
};

const mapStatetoProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export default connect(
  mapStatetoProps,
  { signup }
)(Registration);
