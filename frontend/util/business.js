export const fetchAllBusinesses = ({near, find, bounds,mapChange}) => {

  return $.ajax({
    method:'GET',
    url: '/api/businesses',
    data: {
      search: {
        near,
        find,
        bounds,
        mapChange
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
