import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCookie, logout } from './helpers/authHelpers';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import TopNotif from '../components/TopNotif';
import AddLocation from '../components/AddLocation';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing } = props;
  const isCookie = getCookie(props.userId);
  const onLogout = () => {
    logout(props.userId);
  };

  const displayAddForm = () => {
    document.getElementById('add-location-form').style.display = 'flex';
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
          <>
            <button onClick={onLogout}>
              Logout
            </button>
            <button onClick={displayAddForm}>
              Add Location
            </button>
            </>
          : (
            <>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
        {!props.isEmailVerified && (
          <TopNotif isVerified={props.isEmailVerified} />
        )}
      </div>
      <AddLocation />
    </StyledHeader>
  );
};

function mapStateToProps(state) {
  return {
    userId: state.auth.userId,
    isEmailVerified: state.auth.isEmailVerified
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
