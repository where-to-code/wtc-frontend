import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { successGitlog } from '../redux/actionCreators';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { setTempCookie } from '../components/helpers/authHelpers';

const url = 'https://where2code.herokuapp.com/api/auth/gitAuth';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const GitHub = ({ location, successGitlog }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const code = location.search.split('=')[1];

    axios(`${url}?code=${code}`)
      .then(res => {
        // dispatch successful auth to redux state
        successGitlog(res.data.data);
        // Login is successful so we write a cookie to auth the user
        setTempCookie(res.data.data);
        setIsAuth(true);
      })
      .catch(err => setIsAuth(false));
      // eslint-disable-next-line
  }, []);

  if (isAuth === null)
    return (
      <StyledSpinner>
        <Loader type="Oval" color="#56c1cb" height={80} width={80} />
      </StyledSpinner>
    );

  return isAuth ? <Redirect to="/" /> : <Redirect to="signup" />;
};

const mapStatetoProps = state => {
  return {
    userId: state.auth.userId
  };
};

export default connect(
  mapStatetoProps,
  { successGitlog }
)(GitHub);
