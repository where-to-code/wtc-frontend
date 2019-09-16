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
      {location.isGoogleRating && <span>&#33; Google Ratings</span>}
      <div>
        <button onClick={onClick}>Add a Review</button>
        <button>Add to Favourites</button>
      </div>
      <AddReview locId={locId} />
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

