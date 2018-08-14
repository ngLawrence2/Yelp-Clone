export const fetchAllBusinesses = (keyword) => {
  return $.ajax({
    method:'GET',
    url: '/api/businesses',
    data: {keyword}
  });
}

export const fetchBusiness = id => {
  return $.ajax({
    method:'GET',
    url: `/api/businesses/${id}`
  });
}
