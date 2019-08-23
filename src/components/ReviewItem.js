import React from 'react';
import Stars from '../components/Star'

export default function ReviewItem(props){
    console.log('items', props);
    return(
        <>
        {
            props.reviews.map(review =>(
                <div className="loc-item-container review">
                <div className="rev-rates">
                <div className="rate-line">
                  <label>Quietness</label> 
                  <div className="rate-star-box">
                    <div className="rate">
                    <Stars number={review.quietness}/>
                    </div>
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