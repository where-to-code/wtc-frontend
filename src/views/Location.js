import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleLocation } from '../redux/actionCreators';
import { StyledLoader } from './ViewStyles/SearchPageStyles';
import {
  LocationContainer,
  TopContainer,
  TopRightContainer,
  StyledLocation,
} from './ViewStyles/LocationStyles';
import Header from '../components/Header';
import ReviewContainer from '../components/ReviewContainer';
import LocationBanner from '../components/LocationBanner';
import AverageRatings from '../components/AverageRatings';
import MapIFrame from '../components/MapIFrame';
import UpdateDescription from '../components/UpdateDescription';

const Location = props => {
  const { fetchSingleLocation, location } = props;
  const locationId = props.match.params.id;

  const [editLocation, setEditLocation] = useState(false);

  useEffect(() => {
    fetchSingleLocation(locationId);
  }, []);

  if (location) {
    return (
      <StyledLocation>
        <Header />
        <LocationContainer>
          <TopContainer>
            <LocationBanner location={location} setEditing={setEditLocation} />
            <TopRightContainer>
              <AverageRatings locId={locationId} location={location} />
              <MapIFrame location={location} />
            </TopRightContainer>
          </TopContainer>
          <div>
            <ReviewContainer reviews={location.reviews} />
          </div>
        </LocationContainer>

        <UpdateDescription
          editing={editLocation}
          setEditing={setEditLocation}
          currentDescription={location.description}
          locationId={location.id}
        />
      </StyledLocation>
    );
  } else {
    return (
      <StyledLoader>
        <Loader type="Oval" color="#56c1cb" height={80} width={80} />
      </StyledLoader>
    );
  }
};

function mapStateToProps(state) {
  return {
    location: state.location.location,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleLocation,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Location);
