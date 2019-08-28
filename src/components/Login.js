import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';
import {
  LoginContainer,
  LoginField,
  AltLogin
} from './componentStyles/LoginStyles';

const Login = props => {
  const { loading } = props;
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });
  return (
    <LoginContainer>
      <div className="img">
        <div className='logo-login'>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <LoginField>
        <h1>Log In</h1>
        <form>
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
          <input type="submit" value={loading ? 'Loading...' : 'LOGIN'} />
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
              <FontAwesomeIcon icon={['fab', 'github']} />
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

export default Login;
