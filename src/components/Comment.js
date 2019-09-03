import React from 'react';
import { StyledComment } from './componentStyles/CommentStyles';

const Comment = props => {
  const { description } = props;
  return (
    <StyledComment>
      <>
        <h3>Comment</h3>
        <p>{description}</p>
      </>
    </StyledComment>
  );
};

export default Comment;
