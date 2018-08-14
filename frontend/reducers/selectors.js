export const filterByPrice = (state,filter) => {
  let result = {};
  let keys = Object.keys(state);
  for(let i = 0 ; i < keys.length; i++) {
    if(state[keys[i]].price === filter) {
      result[keys[i]] = state[keys[i]];
    }
  }
  return result;
}
