import React from 'react';
import './location.css'

export default function Location () {
    return(
        <div className="single-loc-container">
          <div className="left-col">
            <div className="desc-container">
              <div className="img-container">
                <img className="loc-image" src="https://source.unsplash.com/lWGRG9_RQHg/1600x900" />
                <h3>Location name</h3>
              </div>
              <div className="loc-item-container">
                <h4>Address</h4>
                <p>28 Avenue des Chardonnerets, 33320 le Taillan</p>
              </div>
              <div className="loc-item-container">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>

            <div className="desc-container">
              <h3 className="centered">Reviews</h3>
              <div className="loc-item-container review">
                <div className="rev-rates">
                  <div className="rate-line">
                    <label>Quietnes</label> 
                    <div className="rate-count-box">
                      <div className="rate bad centered">Bad</div>
                    </div>
                  </div>
                  <div className="rate-line">
                    <label>Wifi</label> 
                    <div className="rate-count-box">
                      <div className="rate medium centered">Okay</div>
                    </div>
                  </div>
                  <div className="rate-line">
                    <label>Accessibility</label> 
                    <div className="rate-count-box">
                      <div className="rate good centered">Goog</div>
                    </div>
                  </div>
                </div>
                <div className='rev-desc'>
                  <h4>Comment</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="loc-item-container review">
                <div className="rev-rates">
                  <div className="rate-line">
                    <label>Quietnes</label> 
                    <div className="rate-count-box">
                      <div className="rate medium centered">Okay</div>
                    </div>
                  </div>
                  <div className="rate-line">
                    <label>Wifi</label> 
                    <div className="rate-count-box">
                      <div className="rate good centered">Good</div>
                    </div>
                  </div>
                  <div className="rate-line">
                    <label>Accessibility</label> 
                    <div className="rate-count-box">
                      <div className="rate bad centered">Bad</div>
                    </div>
                  </div>
                </div>
                <div className='rev-desc'>
                  <h4>Comment</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

            </div>

          </div>
          <div className="right-col">

          </div>

        </div>
      );
}