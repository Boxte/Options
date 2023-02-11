import { Actions } from "../store/Actions";

const initialState = {
  text: "",
};

const textReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_SEARCH:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default textReducer;
