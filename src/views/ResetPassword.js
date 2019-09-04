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
  StyledLeftSection,
} from './ViewStyles/AuthStyles';

const ResetPassword = props => {
  const { loading, error, login } = props;
  const [details, setDetails] = useState({
    email: '',
  });

  const submitLogin = event => {
    event.preventDefault();
    login(details).then(res => {
      if (res.status === 200) props.history.push('/');
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
          <form onSubmit={submitLogin}>
          <input
              type="password"
              placeholder="Enter Password"
              value={details.password}
              onChange={e =>
                setDetails({ ...details, password: e.target.value })
              }
            />
    
            <button type="submit">
              {loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Reset Password'
              )}
            </button>
            {error && <div>{error}</div>}
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
  {resetPassword}
)(ResetPassword);

