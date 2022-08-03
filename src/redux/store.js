import thunk from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    1, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store