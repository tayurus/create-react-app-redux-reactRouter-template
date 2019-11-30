import { alertConstants } from "./alert.constants";

const initialState = { message: "", alertType: "", visible: true };

export const alert = (state: any = initialState, action: any) => {
  const { message, description, icon, hideDescriptor } = action;

  if (hideDescriptor) {
    clearTimeout(state.hideDescriptor);
  }

  switch (action.type) {
    case alertConstants.ALERT_SUCCESS:
      return {
        ...state,
        message,
        description,
        icon,
        alertType: "success",
        visible: true,
        hideDescriptor
      };
    case alertConstants.ALERT_ERROR:
      return {
        ...state,
        message,
        description,
        icon,
        alertType: "error",
        visible: true,
        hideDescriptor
      };

    case alertConstants.ALERT_HIDE: {
      return {
        ...state,
        visible: false,
        hideDescriptor: undefined
      };
    }

    default:
      return state;
  }
};
