import React from 'react';

const OverallReview = () => {
    return(
        <>
              <div className="loc-item-container review">
                <div className="rev-rates overall-review">
                  <div className="rate-line">
                    <label>Quietness</label> 
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
                      <div className="rate good centered">Good</div>
                    </div>
                  </div>
                </div>
              </div>
        </>
    );
}

export default OverallReview;