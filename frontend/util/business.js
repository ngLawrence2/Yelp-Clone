export const fetchAllBusinesses = ({near, find}) => {
  return $.ajax({
    method:'GET',
    url: '/api/businesses',
    data: {
      search: {
        near,
        find
      }
    }
  });
}

export const fetchBusiness = id => {
  return $.ajax({
    method:'GET',
    url: `/api/businesses/${id}`
  });
}
