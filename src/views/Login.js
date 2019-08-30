import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loader-spinner';
import logo from '../assets/logo.png';
import { loginUser } from '../redux/actionCreators';
import { LoginContainer, LoginField, AltLogin } from './ViewStyles/LoginStyles';

const Login = props => {
  const { loading, error, loginUser } = props;
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });

  const submitLogin = event => {
    event.preventDefault();
    loginUser(details).then(res => {
      if (res.status === 200) props.history.push('/');
    });
  };

  return (
    <LoginContainer>
      <div className="img">
        <div className="logo-login">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <LoginField>
        <h1>Log In</h1>
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
            onChange={e => setDetails({ ...details, password: e.target.value })}
          />
          <button type="submit" >{loading ? <Loader type="Oval" color="#fff" height={40} width={30} /> : 'Login'}</button>
          {error && <div>{error}</div>}
        </form>
        <AltLogin>
          <div className="top">
            <div>
              <span></span>
            </div>

            <div>
              <p>or login via</p>
            </div>

            <div>
              <span></span>
            </div>
          </div>
          <div className="bottom">
            <div>
              <a href="https://github.com/login/oauth/authorize?client_id=86d82ca50b3aad5948e7">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </div>
          </div>
        </AltLogin>
        <span>
          Don't have an account? <Link to="/signup"> Sign Up</Link>
        </span>
      </LoginField>
    </LoginContainer>
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
  { loginUser }
)(Login);
