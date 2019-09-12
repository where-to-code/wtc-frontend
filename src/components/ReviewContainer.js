import React from 'react';
import Review from './Review';
import Comment from './Comment';
import {
  StyledReviewCard,
  StyledReviewContainer,
  StyledReviewRatings
} from './componentStyles/ReviewStyles';

const ReviewContainer = props => {
  const { reviews } = props;
  //   console.log(reviews)
  //   const convertToWord = key => {
  //     const words = key.split('_');
  //     let word = '';
  //     words.forEach(w => {
  //         word = `${word} ${w[0].toUpperCase() + w.slice(1)}`
  //     });
  //     return word;
  //   };

  return (
    <StyledReviewContainer>
      {/* {reviews.map(review => {
        let objKeys = review;
        delete objKeys['id'];
        delete objKeys['description'];
        delete objKeys['user_id'];

        const objectKeys = Object.keys(objKeys);
        objectKeys.map(metric => {
            console.log(review[metric]);
          return (
            <Review title={convertToWord(metric)} starNumber={review[metric]} />
          );
        });
      })}
      <Comment description={reviews.description} /> */}

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
      {/* {reviews.map(review => <Review title="Wifi Speed" starNumber={review.wifi_speed} />)} */}
    </StyledReviewContainer>
  );
};

export default ReviewContainer;
