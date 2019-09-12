import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import star from '../assets/star_rating.png';
import emptyStar from '../assets/empty-star.png'
import { StyledStars, StyledEmptyStars, StyledStarsContainer } from './componentStyles/ReviewStyles';
import { addRatingValue } from '../redux/actionCreators';

const Stars = props => {
  const { starNumber, isStatic, isShown, title, review, addRatingValue } = props;
  const [activeStars, setActiveStars] = useState([]);
  const [staticStars, setStatic] = useState(isStatic)
  let starsArray = [];
  let emptyStars = [];
  for (let i = 0; i < 5; i++) {
    const index = i;
    emptyStars.push(<img onMouseEnter={() => onMouseEnter(index)} className="star" key={i} src={emptyStar} alt="star" />)
  }
  useEffect(() => {
    for (let i = 0; i < starNumber; i++) {
      starsArray.push(<img className="star" key={i} src={star} alt="star" />);
    }
    setActiveStars(starsArray)
    if (!isShown) {
      setStatic(false)
      setActiveStars([])
    }
  }, [isShown]);

  const onMouseEnter = index => {
    if (!staticStars) {
      starsArray = [];
      for (let i = 0; i <= index; i++) {
        const index = i;
        starsArray.push(<img onClick={() => onClick(index)} className="star" key={i} src={star} alt="star" />);
      }
      setActiveStars(starsArray)
    }
  }
  const onMouseLeave = () => {
    if (!staticStars) {
      setActiveStars([])
    }
  }
  const onClick = index => {
    if (!isStatic) {
      starsArray = [];
      const newReview = review
      for (let i = 0; i <= index; i++) {
        starsArray.push(<img className="star" key={i} src={star} alt="star" />);
      }
      switch (title) {
        case 'Quietness':
          newReview.quietness = index + 1;
          break;
        case 'Wifi Speed':
          newReview.wifi_speed = index + 1;
          break;
        case 'Community':
          newReview.community = index + 1;
          break;
        case 'Accessibility':
          newReview.accessibility = index + 1;
          break;
      }
      addRatingValue(newReview)
      setActiveStars(starsArray)
      setStatic(true)
    }
  }

  return (
    <StyledStarsContainer className="empty-stars" >
      <StyledEmptyStars id="stars-rating">{emptyStars}</StyledEmptyStars>
      <StyledStars onMouseOut={() => onMouseLeave()} id="stars-rating">{activeStars}</StyledStars>
    </StyledStarsContainer>
  )
};

function mapStateToProps(state) {
  return {
    isShown: state.addReview.isShown,
    review: state.addReview.review
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addRatingValue
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stars);