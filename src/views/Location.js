import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
// import Map from '../components/Map';
// import ReviewItem from '../components/ReviewItem';
// import OverallReview from '../components/OverallReview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleLocation } from '../redux/actionCreators';
import { StyledLoader } from './ViewStyles/SearchPageStyles';
import { LocationContainer, TopContainer, TopRightContainer } from './ViewStyles/LocationStyles';
import Header from '../components/Header';
import ReviewContainer from '../components/ReviewContainer';
import LocationBanner from '../components/LocationBanner';
import AverageRatings from '../components/AverageRatings';
import MapIFrame from '../components/MapIFrame';

const Location = props => {
  console.log(props.location);
  const { fetchSingleLocation, location } = props;
  const loactionId = props.match.params.id;
  useEffect(() => {
    fetchSingleLocation(loactionId);
  }, []);
  if (props.location) {
    return (
      <>
        <Header />
        <LocationContainer>
          <TopContainer>
            <LocationBanner location={location} />
            <TopRightContainer>
              <AverageRatings location={location} />
              <MapIFrame location={location} />
            </TopRightContainer>
          </TopContainer>
          <div>
            <ReviewContainer reviews={location.reviews} />
          </div>

          {/* Right column start
          <div className="right-col">
            <div className="desc-container">
              <h3 className="centered">Overall review</h3>
              <OverallReview />
              <div className="centered">
                <button>Add review</button>
                <button>Add to favorite</button>
              </div>
            </div>
            <div className="desc-container">
              <Map
                selectedLocation={{
                  lat: parseFloat(props.location.latitude),
                  lng: parseFloat(props.location.longitude)
                }}
              />
              <div className="centered">
                <button>Get me there</button>
              </div>
            </div>
          </div> */}
        </LocationContainer>
      </>
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
    location: state.location.location
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleLocation
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
