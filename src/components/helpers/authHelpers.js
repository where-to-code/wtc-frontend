const uuid = require('uuid');

export const getCookie = userId => {
  let cookieData = readCookie(userId);
  if (cookieData) {
    return decodeURIComponent(cookieData);
  } else {
    return false;
  }
};

export const logout = () => {
  // delete cookie and redirect to home
  eraseCookie();
  window.location = '/';
};

// to delete a cookie based on its name (here the userId)
// We just need to set the value of the cookie to empty and
// set the value of expires to a passed date.
function eraseCookie(userId) {
  document.cookie = `wtc= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
}

// Stackover flow to read cookie value by name
function readCookie() {
  let result;
  return (result = new RegExp(
    '(?:^|; )' + encodeURIComponent('wtc') + '=([^;]*)'
  ).exec(document.cookie))
    ? result[1]
    : null;
}

// function that write a cookie on successful login
// using userId as cookie name and uuid(lastname) as value
export const setTempCookie = (userState) => {
  // to make the cookie accessible even if the user
  // reload the page, we give a static name to the cookie
  // to retrieve it and also store current state
  const value = encodeURIComponent(JSON.stringify(userState));
  document.cookie = `wtc=${value}`;
};
