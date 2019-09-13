import React from 'react';
import Review from './Review';
import Comment from './Comment';
import {
  StyledReviewCard,
  StyledReviewContainer,
  StyledReviewRatings,
  StyledNoReviews
} from './componentStyles/ReviewStyles';


const ReviewContainer = props => {
  const { reviews } = props;

  return (
    <>
    <StyledReviewContainer>
      <h3>Reviews</h3>
      {reviews && reviews.map(review => (
        <StyledReviewCard key={review.id}>
          <StyledReviewRatings>
            <Review title="Quietness" starNumber={review.quietness} />
            <Review title="Wifi Speed" starNumber={review.wifi_speed} />
            <Review title="Close Late" starNumber={review.close_late} />
            <Review title="Community" starNumber={review.community} />
            <Review title="Accessibility" starNumber={review.accessibility} />
          </StyledReviewRatings>
          <Comment description={review.description} />
        </StyledReviewCard>
      ))}
      </StyledReviewContainer>
      {!reviews &&
        <StyledNoReviews>
          <h4>There aren't reviews for this location yet</h4>
          <p>You could be the first to add one </p>
          <button>Add a Review</button>
        </StyledNoReviews>
      }
    </>
  );
};

export default ReviewContainer;
