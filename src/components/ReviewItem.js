import React from 'react';
import Stars from '../components/Stars'

export default function ReviewItem(props){
    if(props.reviews){
      return(
        <>
        {
            props.reviews.map(review =>(
                <div key={review.user_id} className="loc-item-container review">
                <div className="rev-rates">
                <div className="rate-line">
                  <label>Quietnes</label> 
                  <div>
                    <Stars starNumber={review.quietness}/>
                  </div>
                </div>
                <div className="rate-line">
                  <label>Wifi</label> 
                  <div>
                    <Stars starNumber={review.wifi_speed}/>
                  </div>
                </div>
                <div className="rate-line">
                  <label>Accessibility</label> 
                  <div>
                  <Stars starNumber={review.accessibility}/>
                  </div>
                </div>
                <div className="rate-line">
                  <label>Community</label> 
                  <div>
                  <Stars starNumber={review.community}/>
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