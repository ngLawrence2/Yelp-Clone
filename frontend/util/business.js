export const fetchAllBusinesses = ({near, find, bounds}) => {

  return $.ajax({
    method:'GET',
    url: '/api/businesses',
    data: {
      search: {
        near,
        find,
        bounds
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
