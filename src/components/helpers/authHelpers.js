const uuid = require('uuid');

export const getCookie = userId => {
  const cookieData = readCookie(userId);
  if (cookieData) {
    return true;
  } else {
    return false;
  }
};

export const logout = userId => {
  // delete cookie and redirect to home
  eraseCookie(userId);
  window.location = '/';
};

// to delete a cookie based on its name (here the userId)
// We just need to set the value of the cookie to empty and
// set the value of expires to a passed date.
function eraseCookie(userId) {
  document.cookie = `${userId}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
}

// Stackover flow to read cookie value by name
function readCookie(name) {
  let result;
  return (result = new RegExp(
    '(?:^|; )' + encodeURIComponent(name) + '=([^;]*)'
  ).exec(document.cookie))
    ? result[1]
    : null;
}

// function that write a cookie on successful login
// using userId as cookie name and uuid(lastname) as value
export const setTempCookie = (id, lastname) => {
  const value = uuid(lastname);
  console.log(document)
  window.document.cookie = `${id}=${value}`;
};
