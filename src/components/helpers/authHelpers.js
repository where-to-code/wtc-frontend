const cookieName = 'ugid';

export const getCookie = () => {
    const cookieData = readCookie(cookieName);
    if(cookieData){
        return true;
    } else {
        return false;
    }
}

// Stackover flow to read cookie value by name
function readCookie(name) {
    let result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}