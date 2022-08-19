import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import fetchPeople, {
  fetchPeopleRequest,
  fetchPeopleFailure,
  fetchPeopleSuccess,
} from "./peopleData";
import { PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE } from "../actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'

jest.mock("axios");
const mockStore = configureMockStore([thunk]);

describe("When peopleData is used", () => {
  it("should return an object with type PEOPLE_REQUEST", () => {
    expect(fetchPeopleRequest()).toMatchObject({
      type: PEOPLE_REQUEST,
    });
  });

  it("should return an object with type PEOPLE_SUCCESS and payload data", () => {
    expect(fetchPeopleSuccess("Data")).toMatchObject({
      type: PEOPLE_SUCCESS,
      payload: "Data",
    });
  });

  it("should return an object with type PEOPLE_FAILURE and paylaod error", () => {
    expect(fetchPeopleFailure("Error")).toMatchObject({
      type: PEOPLE_FAILURE,
      payload: "Error",
    });
  });

  it("should return the values from the API", () => {
    const store = mockStore({ people: { loading: false } });

    const get = jest.fn().mockReturnValue({ data: 1 });
    axios.mockReturnValue({ get });
    return store.dispatch(fetchPeople()).then(() => {
      expect(store.getActions()).toEqual([{type: PEOPLE_REQUEST,
        payload: null}])
    });
  });
});
