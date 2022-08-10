import axios from "axios";
import { VEHICLES_REQUEST, VEHICLES_SUCCESS, VEHICLES_FAILURE } from "../actionTypes";

export const fetchVehiclesRequest = () => {
  return {
    type: VEHICLES_REQUEST,
    payload: null,
  };
};

export const fetchVehiclesSuccess = (data) => {
  return {
    type: VEHICLES_SUCCESS,
    payload: data,
  };
};

export const fetchVehiclesFailure = (error) => {
  return {
    type: VEHICLES_FAILURE,
    payload: error,
  };
};

const fetchVehicles = () => {
  return (dispatch) => {
    dispatch(fetchVehiclesRequest());
    axios
      .get("https://swapi.dev/api/vehicles/")
      .then((res) => {
        console.log(res.data);
        dispatch(fetchVehiclesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchVehiclesFailure("No se encontraron los datos solicitados"));
      });
  };
};

export default fetchVehicles;
