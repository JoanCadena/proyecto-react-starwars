import "@testing-library/jest-dom/extend-expect";
import peopleDataReducer, { initialState } from "./peopleDataReducer";
import { PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE } from "../actionTypes";

describe("When peopleData is used", () => {

  it("should return the initialState", () => {
    expect(peopleDataReducer(undefined, {})).toEqual(initialState);
  });

  it("should return an object with loading true", () => {
    expect(
      peopleDataReducer(undefined, { type: PEOPLE_REQUEST, payload: null })
    ).toMatchObject({
      loading: true,
    });
  });

  it("should return an object with a people information", () => {
    expect(
      peopleDataReducer(undefined, { type: PEOPLE_SUCCESS, payload: "Info" })
    ).toMatchObject({
      people: "Info",
    });
  });

  it("should return an object with an error message", () => {
    expect(
      peopleDataReducer(undefined, {
        type: PEOPLE_FAILURE,
        payload: "Info not found",
      })
    ).toMatchObject({
      error: "Info not found",
    });
  });
});
