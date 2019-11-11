import { alertConstants } from "./alert.constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.ALERT_SUCCESS:
      return {
        ...state,
        type: "alert-success",
        message: action.message
      };
    case alertConstants.ALERT_ERROR:
      return {
        ...state,
        type: "alert-danger",
        message: action.message
      };
    case alertConstants.ALERT_CLEAR:
      return { ...state };
    default:
      return state;
  }
}
