import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import logo from '../assets/logo.png';
import { resetPassword } from '../redux/actionCreators';

import {
  StyledWrapper,
  StyleMap,
  StyledRegistration,
  StyledLeftSection
} from './ViewStyles/AuthStyles';

const ResetPassword = props => {
  const { loading, error, resetPassword } = props;
  const id = Number(props.location.search.split('=')[1]);
  const [details, setDetails] = useState({
    password: '',
    id,
    confirmPassword: ''
  });

  const [inputChangeState, updateInputChangeState] = useState({
    id,
    password: false,
    confirmPassword: false
  });

  const handleChange = e => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });

    updateInputChangeState({
      ...inputChangeState,
      [e.target.name]: true
    });
  };

  const submitPassword = event => {
    event.preventDefault();
    const { password, confirmPassword } = details;
    if (
      !/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/.test(password) ||
      password !== confirmPassword
    ) {
      return;
    }
    resetPassword(details.password, details.id).then(res => {
      if (res.status === 200) props.history.push('/login');
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
          <h3>Reset Password</h3>
          <h6>Please enter your new password</h6>
          <form onSubmit={submitPassword}>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={details.password}
              onChange={handleChange}
            />

            {inputChangeState.password &&
              !/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/.test(
                details.password
              ) && (
                <span>
                  Must be between 6 and 15 characters and contain a number.
                </span>
              )}

            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={details.confirmPassword}
              onChange={handleChange}
            />

            {inputChangeState.confirmPassword &&
              !(details.confirmPassword === details.password) && (
                <span>Password does not match.</span>
              )}
            <button type="submit">
              {loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Reset Password'
              )}
            </button>
            {error && <div class="error-message">{error}</div>}
          </form>
        </StyledLeftSection>
      </StyledRegistration>
    </StyledWrapper>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.resetPassword.loading,
    error: state.resetPassword.error
  };
};

export default connect(
  mapStateToProps,
  { resetPassword }
)(ResetPassword);
