import { alertConstants } from "./../alert.constants";
import { createReducer } from "src/helpers";
import { alertSuccess, alertError } from "./alertTypes";
import { alertHide } from "./alertHide";

const initialState = { message: "", alertType: "", visible: false };

export const alert = createReducer(initialState, {
  [alertConstants.ALERT_SUCCESS]: alertSuccess,
  [alertConstants.ALERT_ERROR]: alertError,

  [alertConstants.ALERT_HIDE]: alertHide
});
