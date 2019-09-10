import React, { useState } from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';
import { 
    StyledButton,
    StyledInput,
    StyledTextarea,
    Row
 } from '../components/componentStyles/FormElementsStyles';
import Loader from 'react-loader-spinner';


export default function AddLocation (props){
    const [loading, setLoading] = useState(false)
    const hideMessage = () =>{
        console.log('hiding message');
        document.getElementById('add-location-form').style.display = 'none';
    }
    const submitLocation = (event) =>{
        event.preventDefault();
        setLoading(true);
        console.log('Submitting form');
    }

    const uploadImage = (event) =>{
        event.preventDefault();
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
                <form onSubmit={submitLocation}>
                    <div>
                    <h3>Add a new location</h3>
                    </div>
                    <Row>
                    <div className="upload-box">
                            <StyledButton onClick={uploadImage}>
                                Upload photo
                            </StyledButton>
                        </div>
                        <div className="input-field-box">
                            <StyledInput
                                type="text"
                                placeholder="Location name"
                            >
                            </StyledInput>
                            <StyledInput
                                type="text"
                                placeholder="Location address"
                            >
                            </StyledInput>
                        </div>
                    </Row>
                    <Row>
                    <StyledTextarea 
                        rows="5"
                        placeholder="Location description"
                        >
                        </StyledTextarea>
                    </Row>
                    <div className="actions-row">
                        <StyledButton type="submit">
                        {
                            loading 
                            ? 
                            <Loader type="Oval" color="#56C1CB" height={40} width={30} /> 
                            : 
                            <>Add location</>
                        }
                        </StyledButton>
                    </div>    
                </form>
                </>        
            }
        </div>
        </StyledOverlayPopup>
    );
}