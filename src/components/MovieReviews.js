import React from 'react';


const MovieReviews = (props) => {
  return (
    <ul className="review-list">
      {props.reviews.map(review =>{
        return ( 
          <li className="review" key={review.display_title}>
            <p>{ review.display_title}</p>
            <a href={ review.link.url}>Link</a>
          </li>)
        })
      }
    </ul>
  )
}
// redundant since class is sending this already
MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews
