import React from 'react';
import OverlayMessage from '../components/OverlayMessage'


const TopNotif = props => {
    const showMessage = () =>{
        document.getElementById('popup').style.display = 'flex';
    }
    return(
        <>
        <div 
            className="top-notif"
            onClick={showMessage}>
            <div>?</div>
        </div>
        <OverlayMessage />
      </>
    );
};
export default TopNotif;