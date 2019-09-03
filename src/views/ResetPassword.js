import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import logo from '../assets/logo.png';
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
          <h3>First, let's find your account</h3>
          <h6>Please enter your email</h6>
          <form onSubmit={submitLogin}>
            <input
              type="email"
              placeholder="Email"
              value={details.email}
              onChange={e => setDetails({ ...details, email: e.target.value })}
            />
    
            <button type="submit">
              {loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Find Account'
              )}
            </button>
            {error && <div>{error}</div>}
          </form>
  
        </StyledLeftSection>
      </StyledRegistration>
    </StyledWrapper>
  );
};

export default ResetPassword;

