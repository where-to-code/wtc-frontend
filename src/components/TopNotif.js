import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import OverlayMessage from '../components/OverlayMessage'


const TopNotif = props => {
    const showMessage = () =>{
        document.getElementById('popup').style.display = 'flex';
    }

    useEffect(()=>{
        // if the user email have not been verified 
        // and the popup message have not been seen
        // then we display the message
        if(!props.isVerified && !props.popupMessageSeen){
            document.getElementById('popup').style.display = 'flex';
        }    
    }

    )

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

const mapStatetoProps = state => {
    console.log('state here', state)
    return {
        popupMessageSeen: state.verifyEmail.popupMessageSeen,
    };
  };
  
  export default connect(
    mapStatetoProps,null
  )(TopNotif);