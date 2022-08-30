import "@testing-library/jest-dom/extend-expect";
import vehiclesDataReducer, { initialState } from "./vehiclesDataReducer";
import { VEHICLES_REQUEST, VEHICLES_SUCCESS, VEHICLES_FAILURE } from "../actionTypes";

describe("When vehiclesData is used", () => {

  it("should return the initialState", () => {
    expect(vehiclesDataReducer(undefined, {})).toEqual(initialState);
  });

  it("should return an object with loading true", () => {
    expect(
      vehiclesDataReducer(undefined, { type: VEHICLES_REQUEST, payload: null })
    ).toMatchObject({
      loading: true,
    });
  });

  it("should return an object with the vehicles information", () => {
    expect(
      vehiclesDataReducer(undefined, { type: VEHICLES_SUCCESS, payload: "Info" })
    ).toMatchObject({
      vehicles: "Info",
    });
  });

  it("should return an object with an error message", () => {
    expect(
      vehiclesDataReducer(undefined, {
        type: VEHICLES_FAILURE,
        payload: "Info not found",
      })
    ).toMatchObject({
      error: "Info not found",
    });
  });
});
