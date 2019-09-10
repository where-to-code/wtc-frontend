import React, { useState, useEffect } from 'react';
import { StyledOverlayPopup } from '../components/componentStyles/OverlayPopupStyles';
import { 
    StyledButton,
    StyledInput,
    StyledTextarea,
    Row
 } from '../components/componentStyles/FormElementsStyles';
import Loader from 'react-loader-spinner';
import { mapPromise } from '../redux/helpers';


export default function AddLocation (props){
    const [loadingForm, setLoading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
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
        setUploadingImage(true);
        console.log('Submitting form');
    }

    useEffect(() => {
        Promise.resolve(mapPromise).then(mapObject => {
        const autocomplete = new mapObject.maps.places.Autocomplete(
            document.getElementById('location-name-field'),
        );
        
        // force auto-complete to return only business
        autocomplete.setTypes(['establishment']);
        autocomplete.setFields(
            ['formatted_address']);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            console.log('Place', place);
        });
        });
    });

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
                    <h2>Add a new location</h2>
                    </div>
                    <Row>
                    <div className="upload-box">
                        <StyledButton onClick={uploadImage}>
                        {
                        uploadingImage 
                        ? 
                        <Loader type="Grid" color="#56C1CB" height={40} width={30} /> 
                        : 
                        <>Upload image</>
                        }
                        </StyledButton>
                    </div>
                    <div className="input-field-box">
                        <StyledInput
                            type="text"
                            placeholder="Location name"
                            id="location-name-field"
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
                            loadingForm 
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