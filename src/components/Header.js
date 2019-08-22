import React from 'react';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import logo from '../assets/logo.png';
const Header = (props) => {
  console.log(props)
  return (
    <StyledHeader landing={props.landing}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="auth">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
