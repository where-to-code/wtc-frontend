import React, { useState } from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';
import Loader from 'react-loader-spinner';


export default function AddLocation (props){
    const [loading, setLoading] = useState(false)
    const hideMessage = () =>{
        console.log('hiding message');
        document.getElementById('add-location-form').style.display = 'none';
    }
    const onSubmit = () =>{
        setLoading(true);
        console.log('Submitting form');
    }

    return (
        <StyledOverlayPopup id="add-location-form">
        <div className="message-container">
            <div className="closing-cross">
                <span onClick={hideMessage}>X</span>
            </div>
            {
                <>
                <div>
                <h3>Add a new location</h3>
                </div>
                <div className="actions-row">
                    <div className="resend" onClick={onSubmit}>
                        {
                            loading 
                            ? 
                            <Loader type="Oval" color="#56C1CB" height={40} width={30} /> 
                            : 
                            <div>Add location</div>
                        }
                    </div>
                </div>    
                </>        
            }
        </div>
        </StyledOverlayPopup>
    );
}