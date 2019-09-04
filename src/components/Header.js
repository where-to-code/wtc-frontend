import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCookie, logout } from './helpers/authHelpers';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing } = props;
  const isCookie = getCookie(props.userId);

  return (
    <StyledHeader landing={landing}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="auth">
      {
        isCookie 
          ? 
            <button
            onClick={logout}>
              Logout
            </button>
          : (
            <>
            <Link to="/signup">
            <button>Sign Up</button>
           </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>  
            </>
          )
      }
        
      </div>
    </StyledHeader>
  );
};

function mapStateToProps (state) {
  return{
    userId: state.auth.userId
  }
};

export default connect(
  mapStateToProps, null
)(Header);