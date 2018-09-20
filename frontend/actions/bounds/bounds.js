export const SAVE_BOUNDS = "SAVE_BOUNDS";

const saveBounds = bounds => {
  return {
    type: SAVE_BOUNDS,
    bounds
  }
}

export const saveBoundsToStore = bounds => dispatch => {
  dispatch(saveBounds(bounds));
}
