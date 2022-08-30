import {
  STARSHIPS_REQUEST,
  STARSHIPS_SUCCESS,
  STARSHIPS_FAILURE,
} from "../actionTypes";

export const initialState = {
  loading: false,
  starships: [],
  error: null,
};

const starshipsDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STARSHIPS_REQUEST:
      return {
        loading: true,
        starships: []
      };
    case STARSHIPS_SUCCESS:
      return {
        loading: false,
        starships: payload
      };
    case STARSHIPS_FAILURE:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default starshipsDataReducer;
