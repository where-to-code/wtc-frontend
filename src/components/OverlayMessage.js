import React from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';

export default function OverlayMessage(props) {
    const hideMessage = () =>{
        document.getElementById('popup').style.display = 'none';
    }
    return(
        <StyledOverlayPopup id="popup">
        <div className="message-container">
            <h3>Please verify your email</h3>
            <p>We have not been able to verify your email yet. Please check your mail box and follow the instruction</p>
            <div className="actions-row">
                <div className="ok" onClick={hideMessage}>OK</div>
                <div className="resend" onClick={hideMessage}>Resend me a verification email</div>
            </div>            
        </div>
        </StyledOverlayPopup>
    );
};