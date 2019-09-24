import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';    
import { connect } from 'react-redux';
import { addNewLocation, clearNewLocation, hideAddLocation, locationLoads } from '../redux/actionCreators';
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
    const { 
        addNewLocation, 
        remoteError, 
        loading,
        isAdded,
        clearNewLocation,
        isShown,
        hideAddLocation,
        isAuth,
        locationLoads,
        geolocation
    } = props
    const [locationPhotos, setLocationPhotos] = useState(null);
    const [description, setDescription] = useState('');
    const [placeData, setPlaceData] = useState(null);
    const [formError, setFormError] = useState(null);
    const [fromUnsplash, setFromUnsplash] = useState(false);
    const [redirect, setRedirect] = useState(false);
    

    const hideMessage = () =>{
        clearNewLocation();
        setLocationPhotos(null);
        setDescription('');
        setPlaceData(null);
        setFormError(null)
        hideAddLocation();
        locationLoads(geolocation);
    }
    const submitLocation = (event) =>{
        event.preventDefault();

        // if fields have no data
        if(!placeData || !description) {
            setFormError(true);
            return;
        } 
        addNewLocation({
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

    const redirectToLogin = () => {
        setRedirect(true);
    }

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
            if(place.photos && place.photos[0]){
                setLocationPhotos(place.photos[0].getUrl());
            }
            else {
                // no photo was received from place API. We set random picture from Unsplash
                // but we dont display on the form
                setLocationPhotos('https://source.unsplash.com/1600x900/?coworking');
                setFromUnsplash(true);
            }
            
            setPlaceData(place);
        });
        });
    });

    if(redirect){
        return(
            <Redirect to="/login" />
        )
    }

    return (
        <StyledOverlayPopup isShown={isShown} id="add-location-form">
        <div className="message-container">
            <div className="closing-cross">
                <span onClick={hideMessage}>X</span>
            </div>
            {
                !isAuth && (
                    <>
                    <div>
                    <h2>You must login first</h2>
                    </div>
                    <StyledButton onClick={redirectToLogin}>
                        OK
                    </StyledButton>
                    </>
                )
            }
            {
                isAuth && (
                    <>
                    <form onSubmit={submitLocation}>
                        <div>
                        <h2>Add a working place</h2>
                        </div>
                        {
                            isAdded 
                            ? (
                                <>
                                <p> Thank you for adding this place </p>
                                <StyledButton onClick={hideMessage}>
                                OK
                                </StyledButton>
                                </>
                            )
                            :
                            (
                                <Row>
                                    {
                                        locationPhotos && 
                                        (
                                            !fromUnsplash &&
                                            <>
                                            <div className="left-box">
                                            <img className="location-photos" alt="location" src={locationPhotos} />    
                                            </div>
                                            </>
                                        )
                                    }
                                <div className="right-box">
                                    { formError && <div className="error"> All fields are required</div> }
                                    { remoteError && <div className="error"> We are unable to process your request. <br/> {remoteError} </div> }
                                    <StyledInput
                                        type="text"
                                        name="name-adress"
                                        placeholder="Location Name or Address "
                                        id="location-name-field"
                                    >
                                    </StyledInput>
                                    <StyledTextarea 
                                    rows="5"
                                    placeholder="What do you think about this place?"
                                    value={description}
                                    onChange={handleChange}
                                    >
                                    </StyledTextarea>
                                    <StyledButton type="submit">
                                    {
                                        loading 
                                        ? 
                                        <Loader type="Oval" color="#56C1CB" height={17} width={73} /> 
                                        : 
                                        <>Add Place</>
                                    }
                                    </StyledButton>
                                </div>
                                </Row>       
                            )
                        }
                    </form>
                    </>    
                )
            }
        </div>
        </StyledOverlayPopup>
    );
};

const mapStatetoProps = state => {
    return {
        loading: state.newLocation.loading,
        remoteError: state.newLocation.error, 
        isAdded: state.newLocation.isAdded,
        isShown: state.newLocation.isShown,
        isAuth: state.auth.userId,
        geolocation: state.maps.geolocation,
    };
  };
  
  export default connect(
    mapStatetoProps,
    { addNewLocation, clearNewLocation, hideAddLocation, locationLoads }
  )(AddLocation);
