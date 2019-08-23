import React, { useState, useEffect } from 'react';
import './location.css';
import Map from '../components/Map';
import ReviewItem from '../components/ReviewItem';
import OverallReview from '../components/OverallReview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleLocation } from '../redux/actionCreators';

function Location (props) {
  const { fetchSingleLocation } = props;
  const loactionId = props.match.params.id

  useEffect(()=>{
    fetchSingleLocation(loactionId);
    }, [loactionId]
  );
    return(
        <div className="single-loc-container">
          <div className="left-col">
            <div className="desc-container">
              <div className="img-container">
                <img className="loc-image" src="https://source.unsplash.com/lWGRG9_RQHg/1600x900" />
                <h3>Location name</h3>
              </div>


              <div className="rev-rates overall-review small-screen">
                <OverallReview />
              </div>




              <div className="loc-item-container">
                <h4>Address</h4>
                <p>28 Avenue des Chardonnerets, 33320 le Taillan</p>
              </div>
              <div className="loc-item-container">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="buttons small-screen">
                  <button>Add review</button><button>Add to favorite</button>
              </div>
            </div>
            <div className="desc-container">
              <h3 className="centered">Reviews</h3>
              <ReviewItem />
            </div>
          </div>

          {/* Right column start */}
          <div className="right-col">
            <div className="desc-container">
              <h3 className="centered">Overall review</h3>
              <OverallReview />
                <div className="centered">
                  <button>Add review</button><button>Add to favorite</button>
                </div>
            </div>
            <div className="desc-container">
              <Map />
              <div className="centered">
                  <button>Get me there</button> 
              </div>
            </div>

          </div>

        </div>
      );
}

function mapStateToProps(state) {
  return {
    maps: state.maps
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSingleLocation,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);