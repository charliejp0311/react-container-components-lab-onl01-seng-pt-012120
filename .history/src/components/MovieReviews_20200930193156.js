// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
    console.log(props)
    return(
        <div className='review-list'>
            <li className='review'>
            {props.review.display_title}
            </li>
        </div>
    )
}

export default MovieReviews;