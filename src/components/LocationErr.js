import React from 'react';
import { StyledLocationErr } from './componentStyles/LocationErrStyles'

const LocationErr = () => {
    return (
        <StyledLocationErr>
            <h4>Sorry, we couldn't find any location around you</h4>
            <p>Maybe you want to try again</p>
            <button onClick={() => window.location.reload()}>Find places near you</button>
            <p>Or suggest us a location</p>
            <button>Add a Location</button>
            <p>Or use our search feature</p>
            <form type="submit">
                <input type="text" placeholder="Search" />
                <input type="submit" value="" />
            </form>
        </StyledLocationErr>
    )
}

export default LocationErr;