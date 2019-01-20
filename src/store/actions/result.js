import * as actionTypes from './actionTypes';

// non-asyc way
export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };

  // return {
  //   type: STORE_RESULT,
  //   result: res
  // };
};
export const deleteResult = resElId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resElId
  };
};
