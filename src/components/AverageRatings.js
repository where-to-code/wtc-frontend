import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledAverage } from './componentStyles/RatingStyles';
import AddReview from './AddReview';
import { setAddReviewTrue } from '../redux/actionCreators';

const AverageRatings = props => {
  const { location, setAddReviewTrue, locId } = props;

  const onClick = () => {
    setAddReviewTrue();
  }

  return (
    <StyledAverage>
      <h3>Average Rating</h3>
      <p>{location.averageRating}</p>
      {location.isGoogleRating && location.reviews.length === 0 && <span>&#33; Google Ratings</span>}
      <div>
        <button onClick={onClick}>ADD A REVIEW</button>
        <button>ADD TO FAVOURITES</button>
      </div>
      <AddReview locId={locId} {...props}/>
    </StyledAverage>
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
)(AverageRatings);

