import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaGithub } from 'react-icons/fa';
import Loader from 'react-loader-spinner';
import logo from '../assets/logo.png';
import { login } from '../redux/actionCreators';
import { setTempCookie } from '../components/helpers/authHelpers';
import {
  StyledWrapper,
  StyleMap,
  StyledRegistration,
  StyledLeftSection,
  StyleGit
} from './ViewStyles/AuthStyles';

const Login = props => {
  const { loading, loginError, login } = props;
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });
  const [inputChangeState, updateInputChangeState] = useState({
    email: false,
    password: false
  });
  const [allFields, setAllFields] = useState(false);

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });

    updateInputChangeState({
      ...inputChangeState,
      [e.target.name]: true
    });
  };

  const submitLogin = event => {
    event.preventDefault();
    const { email, password } = details;

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
      !/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/.test(password)
    ) {
      setAllFields(true);
      return;
    }

    setAllFields(false);

    login(details).then(res => {
      if (res.status === 200) {
        // Login is successful so we write a cookie to auth the user
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
          <h2>Log In</h2>
          <form onSubmit={submitLogin}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={details.email}
              onChange={handleChange}
            />
            {inputChangeState.email &&
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                details.email
              ) && <span>You have entered an invalid email address!</span>}
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
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
            <button type="submit">
              {loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Login'
              )}
            </button>
            {loginError && <div>{loginError}</div>}
            {allFields ? <span>All fields are required.</span> : null}
          </form>
          <div>
            <span></span>
            <p>or login via</p>
            <span></span>
          </div>
          <StyleGit>
            <a href="https://github.com/login/oauth/authorize?client_id=86d82ca50b3aad5948e7">
              <FaGithub/>
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
    loginError: state.auth.loginError
  };
};
export default connect(
  mapStatetoProps,
  { login }
)(Login);
