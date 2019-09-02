import React from 'react';
import Stars from '../components/Stars';
import Comment from './Comment';

export default function ReviewItem(props) {
  if (props.reviews && props.reviews.length > 0) {
    return (
      <>
        {props.reviews.map(review => (
          <div key={review.id} className="loc-item-container review">
            <div className="rev-rates">
              <div className="rate-line">
                <label>Quietness</label>
                <div>
                  <Stars starNumber={review.quietness} />
                </div>
              </div>
              <div className="rate-line">
                <label>Wifi</label>
                <div>
                  <Stars starNumber={review.wifi_speed} />
                </div>
              </div>
              <div className="rate-line">
                <label>Accessibility</label>
                <div>
                  <Stars starNumber={review.accessibility} />
                </div>
              </div>
              <div className="rate-line">
                <label>Community</label>
                <div>
                  <Stars starNumber={review.community} />
                </div>
              </div>
              <Comment review={review} />
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <div>
        <p className="centered">No reviews are available yet</p>
      </div>
    );
  }
}
