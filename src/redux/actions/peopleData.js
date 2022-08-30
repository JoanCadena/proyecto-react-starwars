import axios from "axios";
import { PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE } from "../actionTypes";

export const fetchPeopleRequest = () => {
  return {
    type: PEOPLE_REQUEST,
    payload: null,
  };
};

export const fetchPeopleSuccess = (data) => {
  return {
    type: PEOPLE_SUCCESS,
    payload: data,
  };
};

export const fetchPeopleFailure = (error) => {
  return {
    type: PEOPLE_FAILURE,
    payload: error,
  };
};

const fetchPeople = () => {
  return (dispatch) => {
    dispatch(fetchPeopleRequest());
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        dispatch(fetchPeopleSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchPeopleFailure("No se encontraron los datos solicitados"));
      });
  };
};

export default fetchPeople;
