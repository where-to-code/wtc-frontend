// as the cookie name is not clear yet and may change 
// from one environment to another we store it 
// in an Env variable
const cookieName = process.env.REACT_APP_COOKIE_NAME;

export const getCookie = () => {
    const cookieData = readCookie(cookieName);
    if(cookieData){
        return true;
    } else {
        return false;
    }
}

export const logout = () => {
    // delete cookie and redirect to home
    eraseCookie();
    window.location = "/";
  }

// to delete a cookie based on its name
// We just need to set the value of the cookie to empty and 
// set the value of expires to a passed date.
function eraseCookie(){
    console.log('erasing cookie');
	document.cookie = `${cookieName}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
}

// Stackover flow to read cookie value by name
function readCookie(name) {
    let result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}


///// temporary code to write cookie until banckend is ready to send
export const setTempCookie = () =>{
    document.cookie = `${process.env.REACT_APP_COOKIE_NAME}=qeq6JLAhTYLQPnzDuyb7oXvFXYnIjUNz`;
}
/////

