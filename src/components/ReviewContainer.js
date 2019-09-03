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

      {reviews.map(review => (
        <StyledReviewCard key={review.id}>
          <StyledReviewRatings >
            <Review title="Quietness" starNumber={review.quietness} />
            <Review title="Wifi Speed" starNumber={review.wifi_speed} />
            <Review title="Close Late" starNumber={review.close_late} />
            <Review title="Community" starNumber={review.community} />
            <Review title="Accessibility" starNumber={review.accessibility} />
          </StyledReviewRatings>
          <Comment description={review.description} />
        </StyledReviewCard>
      ))}
      {/* {reviews.map(review => <Review title="Wifi Speed" starNumber={review.wifi_speed} />)} */}
    </StyledReviewContainer>
  );
};

export default ReviewContainer;
