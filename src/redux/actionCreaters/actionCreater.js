import { SIMPLEHELLOWORLD } from "../../types.js";

export const addSimple = (dispatch) => {
  return dispatch({
    type: SIMPLEHELLOWORLD,
    payload: { title: "text", text: "text" },
  });
};
