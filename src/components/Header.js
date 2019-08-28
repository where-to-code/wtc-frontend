import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import logo from '../assets/logo.png';

const Header = props => {
  return (
    <StyledHeader landing={props.landing}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="auth">
        <button>Login</button>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
