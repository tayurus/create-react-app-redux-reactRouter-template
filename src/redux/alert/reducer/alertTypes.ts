export const alertSuccess = (state: any, action: any) => {
  const { message, description, icon, hideDescriptor } = action;

  if (hideDescriptor) {
    clearTimeout(state.hideDescriptor);
  }

  return {
    ...state,
    message,
    description,
    icon,
    alertType: "success",
    visible: true,
    hideDescriptor
  };
};

export const alertError = (state: any, action: any) => {
  const { message, description, icon, hideDescriptor } = action;

  if (hideDescriptor) {
    clearTimeout(state.hideDescriptor);
  }

  return {
    ...state,
    message,
    description,
    icon,
    alertType: "error",
    visible: true,
    hideDescriptor
  };
};

export const alertInfo = (state: any, action: any) => {
  const { message, description, icon, hideDescriptor } = action;

  if (hideDescriptor) {
    clearTimeout(state.hideDescriptor);
  }

  return {
    ...state,
    message,
    description,
    icon,
    alertType: "info",
    visible: true,
    hideDescriptor
  };
};
