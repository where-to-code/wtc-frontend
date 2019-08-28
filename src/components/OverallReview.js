import React from 'react';

export default function OverallReview(){
    return(
        <>
              <div className="loc-item-container review">
                <div className="rev-rates overall-review">
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
              </div>
        </>
    );
}