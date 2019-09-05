import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCookie, logout } from './helpers/authHelpers';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import TopNotif from '../components/TopNotif';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing } = props;
  const isCookie = getCookie(props.userId);
  const onLogout = () => {
    logout(props.userId);
  }

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
            onClick={onLogout}>
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
      {
        !props.isEmailVerified &&
        <TopNotif />
      }
        
      </div>
    </StyledHeader>
  );
};

function mapStateToProps (state) {
  return{
    userId: state.auth.userId,
    isEmailVerified: state.auth.isEmailVerified,
  }
};

export default connect(
  mapStateToProps, null
)(Header);