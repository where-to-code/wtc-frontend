import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loader-spinner';
import logo from '../assets/logo.png';
import { login } from '../redux/actionCreators';
import {
  StyledWrapper,
  StyleMap,
  StyledRegistration,
  StyledLeftSection,
  StyleGit
} from './ViewStyles/AuthStyles';

const Login = props => {
  const { loading, error, login } = props;
  const [details, setDetails] = useState({
    email: '',
    password: ''
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
          <h2>Log In</h2>
          <form onSubmit={submitLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={details.email}
              onChange={e => setDetails({ ...details, email: e.target.value })}
            />
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
                'Login'
              )}
            </button>
            {error && <div>{error}</div>}
          </form>
          <div>
            <span></span>
            <p>or login via</p>
            <span></span>
          </div>
          <StyleGit>
            <a href="https://github.com/login/oauth/authorize?client_id=86d82ca50b3aad5948e7">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </StyleGit>
          <span>
            Don't have an account? <Link to="/signup"> Sign Up</Link>
          </span>
          <span id="reset-password">
            <Link to="/account">Forgot password?</Link>
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
  { login }
)(Login);
