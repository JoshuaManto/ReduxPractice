import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElementId
  );
  return updatedObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updatedObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    // return {
    //   ...state
    //   // Using concat is an immutable way of manipulating an array
    //   results: state.results.concat({ id: new Date(), value: action.result })
    // };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      // const updatedArray = state.results.filter(
      //   result => result.id !== action.resultElementId
      // );

      // return updatedObject(state, { results: updatedArray });

      // return {
      //   ...state,
      //   results: updatedArray
      // };
      return deleteResult(state, action);
  }

  // if (action.type === 'INCREMENT') {
  //   return {
  //     counter: state.counter + 1
  //   };
  // }
  // if (action.type === 'DECREMENT') {
  //   return {
  //     counter: state.counter - 1
  //   };
  // }
  // if (action.type === 'ADD') {
  //   return {
  //     counter: state.counter + action.val
  //   };
  // }
  // if (action.type === 'SUBTRACT') {
  //   return {
  //     counter: state.counter - action.val
  //   };
  // }

  return state;
};

export default reducer;
