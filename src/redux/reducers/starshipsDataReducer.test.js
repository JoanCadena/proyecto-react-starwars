import "@testing-library/jest-dom/extend-expect";
import starshipsDataReducer, { initialState } from "./starshipsDataReducer";
import { STARSHIPS_REQUEST, STARSHIPS_SUCCESS, STARSHIPS_FAILURE } from "../actionTypes";

describe("When starshipsData is used", () => {

  it("should return the initialState", () => {
    expect(starshipsDataReducer(undefined, {})).toEqual(initialState);
  });

  it("should return an object with loading true", () => {
    expect(
      starshipsDataReducer(undefined, { type: STARSHIPS_REQUEST, payload: null })
    ).toMatchObject({
      loading: true,
    });
  });

  it("should return an object with the starships information", () => {
    expect(
      starshipsDataReducer(undefined, { type: STARSHIPS_SUCCESS, payload: "Info" })
    ).toMatchObject({
      starships: "Info",
    });
  });

  it("should return an object with an error message", () => {
    expect(
      starshipsDataReducer(undefined, {
        type: STARSHIPS_FAILURE,
        payload: "Info not found",
      })
    ).toMatchObject({
      error: "Info not found",
    });
  });
});
