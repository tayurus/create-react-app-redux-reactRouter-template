import { combineReducers } from "redux";

import { alert } from "./alert.reducer.js";

const rootReducer = combineReducers({
  alert
});

export default rootReducer;
