export const filterResults = (state , filterData, filterValue) => {

  let result = {};
  let keys = Object.keys(state);
  for(let i = 0 ; i < keys.length; i++) {
    if(state[keys[i]][filterData] === filterValue) {
      console.log(state[keys[i]]);
      result[keys[i]] = state[keys[i]];
    }
  }
  console.log(result);
  return result;
}
