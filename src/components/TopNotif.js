import React from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';

const TopNotif = props => {
    const showMessage = () =>{
        document.getElementById('popup').style.display = 'block';
    }
    const hideMessage = () =>{
        document.getElementById('popup').style.display = 'none';
    }
    return(
        <>
        <div 
        className="top-notif"
        onClick={showMessage}>
        <div>?</div>
        </div>
            <StyledOverlayPopup id="popup">
            <p>Please verify your email</p>
            <p>We were not able to verify your email</p>
            <p>Please check your mail box and follow the instruction</p>
            <div onClick={hideMessage}>Ok</div>
            </StyledOverlayPopup>
      </>
    );
};
export default TopNotif;