import React from 'react';
import Stars from '../components/Stars'

const ReviewItem = props => {
  const { reviews } = props
    if(reviews && reviews.length > 0){
      return(
        <>
        {
            props.reviews.map(review =>(
                <div key={review.id} className="loc-item-container review">
                <div className="rev-rates">
                <div className="rate-line">
                  <label>Quietness</label> 
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
        <div>
          <p className="centered">No reviews are available yet</p>
        </div>
      );
    }
}

export default ReviewItem;