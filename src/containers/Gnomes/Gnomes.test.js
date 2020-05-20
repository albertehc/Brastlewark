import * as A from "./gnomes.actions";
import reducer from "./gnomes.reducer";
import * as constants from "./gnomes.contants";
import initialState from "./gnomes.reducer";
import gnomesExample from "../../utils/gnomes";

describe("ACTIONS", () => {
  describe("ACTIONS GNOMES REQUEST", () => {
    it("GET_GNOMES_REQUEST", () => {
      const result = A.getGnomesRequest(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_REQUEST,
      });
    });

    it("GET_GNOME_REQUEST", () => {
      const result = A.getGnomeRequest(1);
      expect(result).toEqual({
        type: constants.GET_GNOME_REQUEST,
        payload: 1,
      });
    });

    it("GET_GNOMES_PAGE_REQUEST", () => {
      const result = A.getGnomesPageRequest(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_PAGE_REQUEST,
        payload: 1,
      });
    });

    it("GET_GNOMES_SEARCH_REQUEST", () => {
      const result = A.getGnomesSearchRequest(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_SEARCH_REQUEST,
        payload: 1,
      });
    });
  });
  describe("ACTIONS GNOMES SUCCESS", () => {
    it("GET_GNOMES_SUCCESS", () => {
      const result = A.getGnomesSuccess(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_SUCCESS,
        payload: 1,
      });
    });

    it("GET_GNOME_SUCCESS", () => {
      const result = A.getGnomeSuccess(1);
      expect(result).toEqual({
        type: constants.GET_GNOME_SUCCESS,
        payload: 1,
      });
    });

    it("GET_GNOMES_PAGE_SUCCESS", () => {
      const result = A.getGnomesPageSuccess(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_PAGE_SUCCESS,
        payload: 1,
      });
    });

    it("GET_GNOMES_SEARCH_SUCCESS", () => {
      const result = A.getGnomesSearchSuccess(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_SEARCH_SUCCESS,
        payload: 1,
      });
    });
  });
  describe("ACTIONS GNOMES FAILURE", () => {
    it("GET_GNOMES_FAILURE", () => {
      const result = A.getGnomesFailure(1);
      expect(result).toEqual({
        type: constants.GET_GNOMES_FAILURE,
        payload: 1,
      });
      expect(result).not.toBe({});
    });
  });
});
describe("REDUCER", () => {
  it("GET_GNOMES_SUCCESS", () => {
    const { gnomes } = reducer(initialState, {
      type: constants.GET_GNOMES_SUCCESS,
      payload: gnomesExample,
    });
    expect(gnomes.length).toEqual(2);
    expect(gnomes.length).not.toBe(0);
  });

  it("GET_GNOME_SUCCESS", () => {
    const state = reducer(initialState, {
      type: constants.GET_GNOMES_SUCCESS,
      payload: gnomesExample,
    });
    const { gnome } = reducer(state, {
      type: constants.GET_GNOME_SUCCESS,
      payload: 1,
    });
    expect(gnome).toEqual(gnomesExample[1]);
    expect(gnome).not.toBe(gnomesExample[0]);
  });

  it("GET_GNOMES_SEARCH_REQUEST", () => {
    const { search } = reducer(initialState, {
      type: constants.GET_GNOMES_SEARCH_REQUEST,
      payload: "search",
    });
    expect(search).toEqual("search");
    expect(search).not.toBe("");
  });

  it("GET_GNOMES_SEARCH_SUCCESS", () => {
    const state = reducer(initialState, {
      type: constants.GET_GNOMES_SUCCESS,
      payload: gnomesExample,
    });
    let gnomes = reducer(state, {
      type: constants.GET_GNOMES_SEARCH_SUCCESS,
      payload: "green",
    });
    expect(gnomes.actualGnomes[0]).toEqual(gnomesExample[1]);
    gnomes = reducer(state, {
      type: constants.GET_GNOMES_SEARCH_SUCCESS,
      payload: "Tobus Quickwhistle",
    });
    expect(gnomes.actualGnomes[0]).toEqual(gnomesExample[0]);
  });
});
