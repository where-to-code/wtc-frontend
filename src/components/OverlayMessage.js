import React , { useEffect } from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';
import { connect } from 'react-redux';
import { resendEmailVerification, setNewVerificationSent, setPopupMessageSeen } from '../redux/actionCreators';

function OverlayMessage(props) {

    const { 
        resendEmailVerification, 
        setNewVerificationSent, 
        newEmailVerification, 
        setPopupMessageSeen, 
        popupMessageSeen,
        email } = props;
    const hideMessage = () =>{
        setPopupMessageSeen();
        document.getElementById('popup').style.display = 'none';
    }
    const onResend = () =>{
        resendEmailVerification({email}).then(res => {
            if (res.status === 200){
                setNewVerificationSent();
            } 
          });
    }

    useEffect(()=>{
        // if the popup have been seen
        // and a request to receive new email have not been triggered
        // then we do not display
        // but if there was a request triggered, it is displayed
        // so the user can see the result
        if(!newEmailVerification && popupMessageSeen){
            document.getElementById('popup').style.display = 'none';
        }
    }

    );

    return(
        <StyledOverlayPopup id="popup">
        <div className="message-container">
            {
                newEmailVerification ?
                <>
                    <div>
                    <h3>We have resent an email to this address</h3>
                    <p>{email}</p>
                    </div>
                    <div className="ok" onClick={hideMessage}>OK</div>
                </> 
                : 
                <>
                    <h3>Please verify your email</h3>
                    <p>We have not been able to verify your email yet. Please check your mail box and follow the instruction</p>
                    <div className="actions-row">
                        <div className="ok" onClick={hideMessage}>OK</div>
                        <div className="resend" onClick={onResend}>Resend me a verification email</div>
                    </div>            
                </>
            }
        </div>
        </StyledOverlayPopup>
    );

};

const mapStatetoProps = state => {
    console.log('thge state', state)
    return {
        email: state.auth.email,
        newEmailVerification: state.verifyEmail.newEmailVerifRequested,
        popupMessageSeen: state.verifyEmail.popupMessageSeen,
    };
  };
  
  export default connect(
    mapStatetoProps,
    { resendEmailVerification, setNewVerificationSent, setPopupMessageSeen }
  )(OverlayMessage);