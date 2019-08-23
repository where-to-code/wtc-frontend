import React from 'react';
import star from '../assets/star_rating.png';

export default function Star(props){
    console.log(props);
    return(
        <span className="flex">
        <img className="rate-start" src={star} alt="star" />
        </span>
    );
}