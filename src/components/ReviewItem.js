import React from 'react';

export default function ReviewItem(props){
    console.log('items', props);
    if(props.reviews){
      return(
        <>
        {
            props.reviews.map(review =>(
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
                    <div className="rate good centered">Good</div>
                  </div>
                </div>
              </div>    
              <div className="loc-item-container review">
                <div className='rev-desc'>
                    <h4>Comment</h4>
                    <p>{review.description}</p>
                </div>
            </div>
              </div>
            ))
        }
        </>
    );
    }
    else {
      return(
        <h2>Loading review`</h2>
      );
    }
}