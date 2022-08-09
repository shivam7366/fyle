import * as api from "../api/index";

export const getData =
  (username, page = 1) =>
  async (dispatch) => {
    try {
      const [user, repos] = await Promise.all([
        api.getUser(username),
        api.getRepos(username, page),
      ]);
      console.log(user, repos);
      dispatch({
        type: "GET_DATA",
        payload: { user, repos },
      });
    } catch (err) {
      dispatch({
        type: "GET_DATA",
        payload: { error: true, errormsg: err.message },
      });
    }
  };

export const setLoader = (value) => async (dispatch) => {
  dispatch({
    type: "SET_LOADER",
    payload: value,
  });
};
