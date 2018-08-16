export const RECEIVE_LOC="RECEIVE_LOC";
export const SAVE_LOC = "SAVE_LOC";

export const getLatLng = (loc) => {
  return {
    type:RECEIVE_LOC,
    loc
  }
}

export const saveLoc = (loc) => {
  return {
    type:SAVE_LOC,
    loc
  }
}
