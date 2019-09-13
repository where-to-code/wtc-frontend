import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import Review from './Review';
import { setAddReviewFalse, clearReview, addReview } from '../redux/actionCreators'
import { StyledAddRating, StyledAddReview } from './componentStyles/AddReviewStyles';

const AddReview = props => {
    const { setAddReviewFalse, isShown, review, id, clearReview, addReview, locId, loading } = props;
    const [allFields, setAllFields] = useState(false);
    const [notAuthed, setNotAuthed] = useState(false);

    const [input, setInput] = useState({
        review: '',
    });
    const [inputChangeState, updateInputChangeState] = useState({
        review: false,
    });
    useEffect(() => {

    }, [id])
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
        console.log(id)
        if (
            !newReview.quietness || !newReview.wifi_speed ||
            !newReview.community || !newReview.accessibility ||
            !newReview.description 
        ) {
            setAllFields(true);
            return;
        }
        console.log(newReview)
        if(!newReview.user_id) {
            setNotAuthed(true);
            return
        }
        setAllFields(false);
        addReview(newReview, locId);
        closeModal();
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
                <div >
                    <h4>What do you think about this place?</h4>
                    <textarea name="review" onChange={handleChange} />
                    {allFields ? <span>All fields are required.</span> : null}
                    {notAuthed ? <span>You need to login to add a review.</span> : null}
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
