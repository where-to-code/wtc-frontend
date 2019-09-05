import React , { useState } from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';
import { connect } from 'react-redux';
import { verifyEmail } from '../redux/actionCreators';

function OverlayMessage(props) {
    const [verificationResent, setVerificationResent] = useState(false);
    const { verifyEmail, userId, email } = props;
    const hideMessage = () =>{
        document.getElementById('popup').style.display = 'none';
    }
    const onResend = () =>{
        // verifyEmail(email).then(res => {
        //     if (res.status === 200){
        //         setVerificationResent(true);
        //     } 
        //   });
        verifyEmail(email);
        setVerificationResent(true);
    }

    return(
        <StyledOverlayPopup id="popup">
        <div className="message-container">
            {
                verificationResent ?
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
    return {
        userId: state.auth.userId,
        email: state.auth.email
    };
  };
  
  export default connect(
    mapStatetoProps,
    { verifyEmail }
  )(OverlayMessage);