import React from 'react';
import { StyledComment } from './componentStyles/CommentStyles';

const Comment = props => {
  const { description } = props;
  return (
    <StyledComment>
      <>
        <h1>Comment</h1>
        <p>{description}</p>
      </>
    </StyledComment>
  );
};

export default Comment;
