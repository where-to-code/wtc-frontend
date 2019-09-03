import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </StyledHeader>
  );
};

function mapStateToProps (state) {
  console.log('User', state.auth.userId);
  return{
    userId: state.auth.userId
  }
};

export default connect(
  mapStateToProps, null
)(Header);
