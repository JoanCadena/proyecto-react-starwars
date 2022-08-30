import axios from "axios";
import { STARSHIPS_REQUEST, STARSHIPS_SUCCESS, STARSHIPS_FAILURE } from "../actionTypes";

export const fetchStarshipsRequest = () => {
  return {
    type: STARSHIPS_REQUEST,
    payload: null,
  };
};

export const fetchStarshipsSuccess = (data) => {
  return {
    type: STARSHIPS_SUCCESS,
    payload: data,
  };
};

export const fetchStarshipsFailure = (error) => {
  return {
    type: STARSHIPS_FAILURE,
    payload: error,
  };
};

const fetchStarships = () => {
  return (dispatch) => {
    dispatch(fetchStarshipsRequest());
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => {
        dispatch(fetchStarshipsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchStarshipsFailure("No se encontraron los datos solicitados"));
      });
  };
};

export default fetchStarships;
