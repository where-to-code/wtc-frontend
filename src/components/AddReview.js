import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import Review from './Review';
import { Redirect } from 'react-router-dom';
import {
  setAddReviewFalse,
  clearReview,
  addReview
} from '../redux/actionCreators';
import {
  StyledAddRating,
  StyledAddReview
} from './componentStyles/AddReviewStyles';

import { StyledModal } from './componentStyles/ModalStyles';

const AddReview = props => {
  const {
    setAddReviewFalse,
    isShown,
    review,
    id,
    clearReview,
    addReview,
    locId,
    loading
  } = props;

  const [allFields, setAllFields] = useState(false);
  const [notAuthed, setNotAuthed] = useState(false);

  const [input, setInput] = useState({
    review: ''
  });

  const [inputChangeState, updateInputChangeState] = useState({
    review: false
  });

  useEffect(() => {}, [id]);
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });

    updateInputChangeState({
      ...inputChangeState,
      [e.target.name]: true
    });
  };

  const submitReview = () => {
    const newReview = review;
    newReview.description = input.review;
    newReview.user_id = id;
    if (
      !newReview.quietness ||
      !newReview.wifi_speed ||
      !newReview.community ||
      !newReview.accessibility ||
      !newReview.description
    ) {
      setAllFields(true);
      return;
    }
    if (!newReview.user_id) {
      setNotAuthed(true);
      return;
    }
    setAllFields(false);
    addReview(newReview, locId);
    closeModal();
  };

  const closeModal = () => {
    setAddReviewFalse();
    clearReview();
  };

  const redirectToLogin = () => {
    props.history.push('/login');
  };

  return (
    <StyledAddReview isShown={isShown}>
      {!id && (
        <StyledModal isShown={isShown}>
          <span onClick={closeModal}>&times;</span>
          <div>
            <h2>You must login first</h2>
            <button onClick={redirectToLogin}>OK</button>
          </div>
        </StyledModal>
      )}
      {id && (
        <StyledModal isShown={isShown} id={id}>
          <span onClick={closeModal}>&times;</span>
          <h2>Add a Review</h2>
          <form onSubmit={e => e.preventDefault()}>
            <h2>Please rate the following</h2>
            <StyledAddRating>
              <Review title="Quietness" />
              <Review title="Wifi Speed" />
              <Review title="Community" />
              <Review title="Accessibility" />
            </StyledAddRating>
            <div>
              <h2>What do you think about this place?</h2>
              <textarea name="review" onChange={handleChange} />
              {allFields ? <span>All fields are required.</span> : null}
              {notAuthed ? (
                <span>You need to login to add a review.</span>
              ) : null}
            </div>

            <button onClick={submitReview}>
              {loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Add Review'
              )}
            </button>
          </form>
        </StyledModal>
      )}
    </StyledAddReview>
  );
};
function mapStateToProps(state) {
  return {
    isShown: state.addReview.isShown,
    review: state.addReview.review,
    id: state.auth.userId,
    loading: state.addReview.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setAddReviewFalse,
      clearReview,
      addReview
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReview);
