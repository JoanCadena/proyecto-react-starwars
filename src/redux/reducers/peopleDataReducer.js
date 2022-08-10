import {
  PEOPLE_REQUEST,
  PEOPLE_SUCCESS,
  PEOPLE_FAILURE,
} from "../actionTypes";

export const initialState = {
  loading: false,
  people: [],
  error: null,
};

const peopleDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PEOPLE_REQUEST:
      return {
        loading: true,
        people: []
      };
    case PEOPLE_SUCCESS:
      return {
        loading: false,
        people: payload
      };
    case PEOPLE_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default peopleDataReducer;
