import { combineReducers } from "redux";
import peopleDataReducer from "./reducers/peopleDataReducer";
import vehiclesDataReducer from "./reducers/vehiclesDataReducer";
import starshipsDataReducer from "./reducers/starshipsDataReducer";

const rootReducers = combineReducers({
    peopleDataReducer,
    vehiclesDataReducer,
    starshipsDataReducer
    
});

export default rootReducers;
