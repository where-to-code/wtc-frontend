import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCookieToState } from '../redux/actionCreators';
import { getCookie, logout } from './helpers/authHelpers';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import TopNotif from '../components/TopNotif';
import AddLocation from '../components/AddLocation';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing, userId, isEmailVerified, setCookieToState } = props;
  const cookieData = getCookie();
  // we have a cookie but no user ID (user relaoded the page/app)
  if(cookieData && !userId){
    // we reinitialise the state with the data from the cookie
    setCookieToState(cookieData);
  }
  const onLogout = () => {
    logout();
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
        cookieData 
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
        {!isEmailVerified && (
          <TopNotif isVerified={isEmailVerified} />
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
  { setCookieToState }
)(Header);
