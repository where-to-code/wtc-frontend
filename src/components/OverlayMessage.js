import React, { useEffect } from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import {
  resendEmailVerification,
  setNewVerificationSent,
  setPopupMessageSeen
} from '../redux/actionCreators/authActionCreators';

function OverlayMessage(props) {
  const {
    resendEmailVerification,
    setNewVerificationSent,
    newEmailVerification,
    setPopupMessageSeen,
    popupMessageSeen,
    loading,
    email
  } = props;
  const hideMessage = () => {
    setPopupMessageSeen();
    document.getElementById('popup').style.display = 'none';
  };
  const onResend = async () => {
    resendEmailVerification({ email }).then(res => {
      if (res.status === 200) {
        setNewVerificationSent();
      }
    });
  };

  useEffect(() => {
    // if the popup have been seen
    // and a request to receive new email have not been triggered
    // then we do not display
    // but if there was a request triggered, it is displayed
    // so the user can see the result
    if (!newEmailVerification && popupMessageSeen) {
      document.getElementById('popup').style.display = 'none';
    }
  }, [newEmailVerification, popupMessageSeen]);

  return (
    <StyledOverlayPopup id="popup">
      <div className="message-container">
        <div className="closing-cross">
          <span onClick={hideMessage}>X</span>
        </div>
        {newEmailVerification ? (
          <>
            <div>
              <h3>We have resent an email to this address</h3>
              <p>{email}</p>
            </div>
          </>
        ) : (
          <>
            <h3>Please verify your email</h3>
            <p>
              We have not been able to verify your email yet. Please check your
              mail box and follow the instruction
            </p>
            <div className="actions-row">
              <div className="resend" onClick={onResend}>
                {loading ? (
                  <Loader type="Oval" color="#56C1CB" height={40} width={30} />
                ) : (
                  <div>Resend me a verification email</div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </StyledOverlayPopup>
  );
}

const mapStatetoProps = state => {
  return {
    email: state.auth.email,
    loading: state.auth.loading,
    newEmailVerification: state.auth.newEmailVerifRequested,
    popupMessageSeen: state.auth.popupMessageSeen
  };
};

export default connect(
  mapStatetoProps,
  { resendEmailVerification, setNewVerificationSent, setPopupMessageSeen }
)(OverlayMessage);
