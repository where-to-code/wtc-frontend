import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import logo from '../assets/logo.png';
import { verifyEmail } from '../redux/actionCreators';
import {
  StyledWrapper,
  StyleMap,
  StyledRegistration,
  StyledLeftSection
} from './ViewStyles/AuthStyles';

const FindAccount = props => {
  const { loading, error, verifyEmail } = props;
  const [details, setDetails] = useState({
    email: ''
  });

  const submitEmail = event => {
    event.preventDefault();
    verifyEmail(details).then(res => {
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
          <form onSubmit={submitEmail}>
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
                'Send Email'
              )}
            </button>
            {error && <div className="error-message">{error}</div>}
          </form>
        </StyledLeftSection>
      </StyledRegistration>
    </StyledWrapper>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.verifyEmail.loading,
    error: state.verifyEmail.error
  };
};

export default connect(
  mapStateToProps,
  { verifyEmail }
)(FindAccount);
