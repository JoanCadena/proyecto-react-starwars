import {
  VEHICLES_REQUEST,
  VEHICLES_SUCCESS,
  VEHICLES_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  vehicles: [],
  error: null,
};

const vehiclesDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VEHICLES_REQUEST:
      return {
        loading: true,
        vehicles: []
      };
    case VEHICLES_SUCCESS:
      return {
        loading: false,
        vehicles: payload
      };
    case VEHICLES_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default vehiclesDataReducer;
