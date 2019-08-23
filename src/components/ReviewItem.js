import React from 'react';

export default function ReviewItem(){
    return(
        <>
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
        </>
    );
}