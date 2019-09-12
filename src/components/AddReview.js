import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import Review from './Review';
import { setAddReviewFalse, clearReview, addReview } from '../redux/actionCreators'
import { StyledAddRating, StyledAddReview } from './componentStyles/AddReviewStyles';

const AddReview = props => {
    const { setAddReviewFalse, isShown, review, id, clearReview, addReview, locId, loading } = props;

    const [input, setInput] = useState({
        review: '',
    });
    const [inputChangeState, updateInputChangeState] = useState({
        review: false,
    });

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
        addReview(newReview, locId)
    }
    const closeModal = () => {
        setAddReviewFalse();
        clearReview()
    }

    return (
        <StyledAddReview isShown={isShown}>
            <h2>Add a Review</h2>
            <form onSubmit={e => e.preventDefault()}>
                <h4>Please rate the following</h4>
                <StyledAddRating>
                    <Review title="Quietness" />
                    <Review title="Wifi Speed" />
                    <Review title="Community" />
                    <Review title="Accessibility" />
                </StyledAddRating>
                <div className="text-review">
                    <h4>What do you think about this place?</h4>
                    <textarea name="review" onChange={handleChange} />
                </div>

                <button onClick={submitReview}>{loading ? (
                <Loader type="Oval" color="#fff" height={40} width={30} />
              ) : (
                'Add Review'
              )}</button>
            </form>
            <p onClick={closeModal}>X</p>
        </StyledAddReview>
    )
}
function mapStateToProps(state) {
    return {
        isShown: state.addReview.isShown,
        review: state.addReview.review,
        id: state.auth.userId,
        loading: state.addReview.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setAddReviewFalse,
            clearReview,
            addReview
        },
        dispatch,
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddReview);
