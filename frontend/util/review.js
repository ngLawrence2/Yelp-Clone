export const createReview = (review) => {
  return $.ajax({
      data:{review},
      url: `/api/businesses/${review.business_id}/reviews`,
      method:'POST'
  });
}

export const updateReview = (review) => {
  return $.ajax({
    data:{review},
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
    method:'PATCH'
  });
}
