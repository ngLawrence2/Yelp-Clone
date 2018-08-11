export const fetchAllBusinesses = () => {
  return $.ajax({
    method:'GET',
    url: '/api/businesses'
  });
}

export const fetchBusiness = id => {
  return $.ajax({
    method:'GET',
    url: `/api/businesses/${id}`
  });
}
