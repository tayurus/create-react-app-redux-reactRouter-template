import { alertConstants } from "../alert.constants";

export const hideAlert = () => {
  return { type: alertConstants.ALERT_HIDE };
};
