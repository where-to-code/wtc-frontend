import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing } = props;
  return (
    <StyledHeader landing={landing}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="auth">
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
