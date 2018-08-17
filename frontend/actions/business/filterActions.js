
export const FILTER_PRICE = "FILTER_PRICE";
export const FILTER_HOURS = "FILTER_HOURS";

const receive_price = (businesses) => {
  return {
    type: FILTER_PRICE,
    businesses
  }
}

const receive_open = (businesses) => {
  return {
    type:FILTER_HOURS,
    businesses
  }
}
