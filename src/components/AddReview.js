import React, { useState } from 'react';
import Stars from './Stars';
import Review from './Review'

const AddReview = props => {
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

    return (
        <div className="container">
            <h2>Add a Review</h2>
            <form>
                <h4>Please rate the following</h4>
                <div className="stars-rating">
                <Review title="Quietness"  />
            <Review title="Wifi Speed"  />
            <Review title="Close Late"  />
            <Review title="Community"  />
            <Review title="Accessibility" />
                </div>
                <div className="text-review">
                    <h4>What do you think about this place?</h4>
                    <input type="text" name="review" onChange={handleChange} />
                </div>
            </form>

        </div>
    )
}
export default AddReview;