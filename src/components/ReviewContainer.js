import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Review from './Review';
import Comment from './Comment';
import { setAddReviewTrue } from '../redux/actionCreators';
import {
  StyledReviewCard,
  StyledReviewContainer,
  StyledReviewRatings,
  StyledNoReviews
} from './componentStyles/ReviewStyles';


const ReviewContainer = props => {
  const { reviews, setAddReviewTrue } = props;

  const onClick = () => {
    setAddReviewTrue();
  }

  return (
    <>
    <StyledReviewContainer>
      <h3>Reviews</h3>
      {reviews && reviews.map(review => (
        <StyledReviewCard key={review.id}>
          <StyledReviewRatings>
            <Review isStatic={true} title="Quietness" starNumber={review.quietness} />
            <Review isStatic={true} title="Wifi Speed" starNumber={review.wifi_speed} />
            <Review isStatic={true} title="Community" starNumber={review.community} />
            <Review isStatic={true} title="Accessibility" starNumber={review.accessibility} />
          </StyledReviewRatings>
          <Comment description={review.description} />
        </StyledReviewCard>
      ))}
      </StyledReviewContainer>
      {!reviews.length &&
        <StyledNoReviews>
          <h4>There aren't reviews for this location yet</h4>
          <p>You could be the first to add one </p>
          <button onClick={onClick}>ADD A REVIEW</button>
        </StyledNoReviews>
      }
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAddReviewTrue,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewContainer);
