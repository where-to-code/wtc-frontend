import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Review from './Review';
import { setAddReviewFalse } from '../redux/actionCreators'
import { StyledAddRating, StyledAddReview } from './componentStyles/AddReviewStyles';

const AddReview = props => {
    const { setAddReviewFalse, isShown } = props;

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
    const submitReview = e => {
        e.preventDefault();
    }
    const closeModal = () => {
        setAddReviewFalse();
    }

    return (
        <StyledAddReview isShown={isShown}>
            <h2>Add a Review</h2>
            <form onSubmit={e => e.preventDefault()}>
                <h4>Please rate the following</h4>
                <StyledAddRating>
                    <Review title="Quietness" />
                    <Review title="Wifi Speed" />
                    <Review title="Close Late" />
                    <Review title="Community" />
                    <Review title="Accessibility" />
                </StyledAddRating>
                <div className="text-review">
                    <h4>What do you think about this place?</h4>
                    <textarea name="review" onChange={handleChange} />
                </div>

                <button>Add Review</button>
            </form>
            <p onClick={closeModal}>X</p>
        </StyledAddReview>
    )
}
function mapStateToProps(state) {
    return {
        isShown: state.addReview.isShown
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setAddReviewFalse,
        },
        dispatch,
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddReview);
