import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCookieToState, showAddLocation } from '../redux/actionCreators';
import { getCookie, logout } from './helpers/authHelpers';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import TopNotif from '../components/TopNotif';
import AddLocation from '../components/AddLocation';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing, userId, isEmailVerified, setCookieToState, showAddLocation } = props;
  const cookieData = getCookie();
  // we have a cookie but no user ID (user relaoded the page/app)
  if (cookieData && !userId) {
    // we reinitialise the state with the data from the cookie
    setCookieToState(cookieData);
  }
  const onLogout = () => {
    logout();
  };

  const displayAddForm = () => {
    showAddLocation()
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
              <button className="add-space" onClick={displayAddForm}>
                Add a Place
              </button>
              <button onClick={onLogout}>
                Logout
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
    isEmailVerified: state.auth.isEmailVerified,
  };
}

export default connect(
  mapStateToProps,
  { setCookieToState, showAddLocation }
)(Header);
