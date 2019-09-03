const cookieName = 'ugid';

export const getCookie = () => {
    const cookieData = readCookie(cookieName);
    if(cookieData){
        return true;
    } else {
        return false;
    }
}

// to delete a cookie based on its name
// To delete a cookie, we just need to set the value of the cookie to empty and 
// set the value of expires to a passed date.
export const eraseCookie = () => {
    console.log('erasing cookie');
	document.cookie = `${cookieName}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
}

// Stackover flow to read cookie value by name
function readCookie(name) {
    let result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}

