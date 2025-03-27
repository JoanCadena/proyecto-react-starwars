import { combineReducers } from "@reduxjs/toolkit";
import peopleDataReducer from "./reducers/peopleDataReducer";
import vehiclesDataReducer from "./reducers/vehiclesDataReducer";
import starshipsDataReducer from "./reducers/starshipsDataReducer";

const rootReducer = combineReducers({
  peopleDataReducer,
  vehiclesDataReducer,
  starshipsDataReducer,
});

export default rootReducer;
