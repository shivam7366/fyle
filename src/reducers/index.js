import { combineReducers } from "redux";

const initState = {
  user: null,
  repos: [],
  loader: false,
  error: false,
  errormsg: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA":
      console.log({
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        error: action.payload.error,
        errormsg: action.payload.errormsg,
      });
      return {
        user: action.payload.user,
        repos: action.payload.repos,
        loader: false,
      };
    case "SET_LOADER":
      console.log({
        ...state,

        loader: action.payload,
      });
      return {
        ...state,

        loader: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
