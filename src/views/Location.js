import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Map from '../components/Map';
import OverallReview from '../components/OverallReview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleLocation } from '../redux/actionCreators';
import { StyledLoader } from './ViewStyles/SearchPageStyles';
import { LocationContainer } from './ViewStyles/LocationStyles';
import Header from '../components/Header';
import ReviewContainer from '../components/ReviewContainer';

const Location = props => {
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
          <div className="left-col">
            <div className="desc-container">
              <div className="img-container">
                <img className="loc-image" src={props.location.image_url} />
                <h3>{props.location.name}</h3>
              </div>

              <div className="rev-rates overall-review small-screen">
                <OverallReview />
              </div>
              <div className="loc-item-container">
                {props.address && (
                  <>
                    <h4>Address</h4>
                    <p>{props.location.address}</p>
                  </>
                )}
              </div>
              <div className="loc-item-container">
                <h4>Description</h4>
                <p>{props.location.description}</p>
              </div>
              <div className="buttons small-screen">
                <button>Add review</button>
                <button>Add to favorite</button>
              </div>
            </div>
            <div className="desc-container">
              <h3 className="centered">Reviews</h3>
            </div>
            <ReviewContainer reviews={props.location.reviews} />
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
          </div>
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
