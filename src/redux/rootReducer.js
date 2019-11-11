import { combineReducers } from "redux";

import { alert } from "./alert/alert.reducer";

const rootReducer = combineReducers({
  alert
});

export default rootReducer;
