export const RECEIVE_LOC="RECEIVE_LOC";
export const getLatLng = (loc) => {
  return {
    type:RECEIVE_LOC,
    loc
  }
}
