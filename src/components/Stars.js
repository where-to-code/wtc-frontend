import React, { useState, useEffect } from 'react';
import star from '../assets/star_rating.png';
import emptyStar from '../assets/empty-star.png'
import { StyledStars, StyledEmptyStars, StyledStarsContainer } from './componentStyles/ReviewStyles';

const Stars = props => {
  const { starNumber, isStatic } = props;
  const [activeStars, setActiveStars] = useState([]);
  const [staticStars, setStatic] = useState(isStatic)
  let starsArray = [];
  let emptyStars = [];
  for (let i = 0; i < 5; i++) {
    const index = i;
    emptyStars.push(<img  onMouseEnter={() => onMouseEnter(index)} className="star" key={i} src={emptyStar} alt="star" />)
  }
  useEffect(() => {
    for (let i = 0; i < starNumber; i++) {
      starsArray.push(<img  className="star" key={i} src={star} alt="star" />);
    }
    setActiveStars(starsArray)
  }, [])
  const onMouseEnter = index => {
    console.log(staticStars)
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
    console.log('click')
    if (!isStatic) {
      starsArray = [];
      for (let i = 0; i <= index; i++) {
        starsArray.push(<img className="star" key={i} src={star} alt="star" />);
      }
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

export default Stars;
