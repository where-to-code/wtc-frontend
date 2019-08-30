import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

// const url = 'https://where2code.herokuapp.com/api/auth/gitAuth';
const url = 'https://where-to-code-staging.herokuapp.com/api/auth/gitAuth'

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export default ({ location }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const code = location.search.split('=')[1];

    axios(`${url}?code=${code}`)
      .then(res => setIsAuth(true))
      .catch(err => setIsAuth(false));
  }, []);

  if (isAuth === null)
    return (
      <StyledSpinner>
        <Loader type="Oval" color="#56c1cb" height={80} width={80} />
      </StyledSpinner>
    );

  return isAuth ? <Redirect to="/" /> : <Redirect to="signup" />;
};
