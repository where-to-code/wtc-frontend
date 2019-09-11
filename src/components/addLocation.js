import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewLocation } from '../redux/actionCreators';
import { StyledOverlayPopup } from './componentStyles/OverlayPopupStyles';
import { 
    StyledButton,
    StyledInput,
    StyledTextarea,
    Row
 } from './componentStyles/FormElementsStyles';
import Loader from 'react-loader-spinner';
import { mapPromise } from '../redux/helpers';


function AddLocation (props){
    const [locationPhotos, setLocationPhotos] = useState(null);
    const [description, setDescription] = useState('');
    const [placeData, setPlaceData] = useState(null);
    const [formError, setFormError] = useState(null);
    const hideMessage = () =>{
        document.getElementById('add-location-form').style.display = 'none';
    }
    const submitLocation = (event) =>{
        event.preventDefault();
        if(!placeData || !description) {
            setFormError(true);
            return;
        } 
        props.addNewLocation({
            name: placeData.name,
            description: description,
            image_url: locationPhotos,
            address: placeData.formatted_address,
            longitude: placeData.geometry.location.lng(),
            latitude: placeData.geometry.location.lat(),
            place_id: placeData.place_id
        })
    }

    const handleChange = event => {
        setDescription(event.target.value);
        // if any error is being displayed, we remove it if user type in again
        setFormError(false);
    };

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
                    {formError && <div className="error"> All fields are required</div>}
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
                        value={description}
                        onChange={handleChange}
                        >
                        </StyledTextarea>
                        <StyledButton type="submit">
                        {
                            props.loading 
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
};

const mapStatetoProps = state => {
    return {
        loading: state.newLocation.loading
    };
  };
  
  export default connect(
    mapStatetoProps,
    { addNewLocation }
  )(AddLocation);
