import React from 'react';
import RatingStars from '../business/ratingStars';

const ReviewItem = ({review,author}) => {

  return (
    <div className="reviewItemContainer">
      <div className="reviewAuthor">{author.fname} {author.lname.charAt(0)}.</div>
      <div className="reviewRatingBodyContainer">
        <div className="reviewItemRating"><RatingStars rating= {review.rating} /></div>
        <div className="reviewItemBody">{review.body}</div>
        <div></div>
      </div>
    </div>
  );
}

export default ReviewItem;
