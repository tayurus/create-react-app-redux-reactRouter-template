import { alertConstants } from "./../alert.constants";
import { hideAlert } from "./hide.action";

export const errorAlert = (message: string, description = "", duration = alertConstants.ALERT_HIDE_INTERVAL) => {
  return (dispatch: Function) => {
    const hideDescriptor = setTimeout(() => dispatch(hideAlert()), duration);
    dispatch({ type: alertConstants.ALERT_ERROR, message, description, hideDescriptor });
  };
};
