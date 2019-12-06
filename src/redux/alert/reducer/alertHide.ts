export const alertHide = (state: any, action: any) => {
  const { hideDescriptor } = action;

  if (hideDescriptor) {
    clearTimeout(state.hideDescriptor);
  }

  return {
    ...state,
    visible: false,
    hideDescriptor: undefined
  };
};
