import React, { useEffect } from 'react';
import Map from '../components/Map';
import ReviewItem from '../components/ReviewItem';
import OverallReview from '../components/OverallReview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleLocation } from '../redux/actionCreators';
import { LocationContainer } from './ViewStyles/LocationStyles';

const Location = props => {
  const { fetchSingleLocation, location } = props;
  const loactionId = props.match.params.id;

  useEffect(() => {
    fetchSingleLocation(loactionId);
  }, []);
  if (props.location) {
    return (
      <LocationContainer>
        <div className="left-col">
          <div className="desc-container">
            <div className="img-container">
              <img className="loc-image" src={location.image_url} />
              <h3>{location.name}</h3>
            </div>

            <div className="rev-rates overall-review small-screen">
              <OverallReview />
            </div>
            <div className="loc-item-container">
              {props.address && (
                <>
                  <h4>Address</h4>
                  <p>{location.address}</p>
                </>
              )}
            </div>
            <div className="loc-item-container">
              <h4>Description</h4>
              <p>{location.description}</p>
            </div>
            <div className="buttons small-screen">
              <button>Add review</button>
              <button>Add to favorite</button>
            </div>
          </div>
          <div className="desc-container">
            <h3 className="centered">Reviews</h3>
            <ReviewItem reviews={location.reviews} />
          </div>
        </div>

        {/* Right column start */}
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
            <div className="map-container">
              <Map
                singleLocCoord={{
                  lat: parseFloat(location.latitude),
                  lng: parseFloat(location.longitude)
                }} />
            </div>
            <div className="centered">
              <button>Get me there</button>
            </div>
          </div>
        </div>
      </LocationContainer>
    );
  } else {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
}

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
