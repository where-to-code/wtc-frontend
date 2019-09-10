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
    //const [uploadingImage, setUploadingImage] = useState(false);
    const [locationPhotos, setLocationPhotos] = useState(null);
    const [placeData, setPlaceData] = useState(null);
    const hideMessage = () =>{
        console.log('hiding message');
        document.getElementById('add-location-form').style.display = 'none';
    }
    const submitLocation = (event) =>{
        event.preventDefault();
        setLoading(true);
    }

    // const uploadImage = (event) =>{
    //     event.preventDefault();
    //     setUploadingImage(true);
    //     console.log('Submitting form');
    // }

    // useEffect to use the Map place API autocomplete
    useEffect(() => {
        Promise.resolve(mapPromise).then(mapObject => {
        const autocomplete = new mapObject.maps.places.Autocomplete(
            document.getElementById('location-name-field'),
        );
        
        // force auto-complete to return only business
        autocomplete.setTypes(['establishment']);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            setLocationPhotos(place.photos[0].getUrl())
            setPlaceData(place);
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
                        {
                            locationPhotos && 
                            <>
                                <div className="left-box">
                                <img className="location-photos" alt="location" src={locationPhotos} />    
                                </div>
                                
                            </>
                        }
                    <div className="right-box">
                        <StyledInput
                            type="text"
                            name="name-adress"
                            placeholder="Location Name or Address "
                            id="location-name-field"
                        >
                        </StyledInput>
                        <StyledTextarea 
                        rows="5"
                        placeholder="General Location Description"
                        >
                        </StyledTextarea>
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
                    </Row>  
                </form>
                </>        
            }
        </div>
        </StyledOverlayPopup>
    );
}