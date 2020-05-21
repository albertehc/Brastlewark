import * as constants from "../constants/gnomes.contants";

export const getGnomesRequest = () => ({
  type: constants.GET_GNOMES_REQUEST,
});

export const getGnomesSuccess = (payload) => ({
  type: constants.GET_GNOMES_SUCCESS,
  payload,
});

export const getGnomesFailure = (payload) => ({
  type: constants.GET_GNOMES_FAILURE,
  payload,
});

export const getGnomeRequest = (payload) => ({
  type: constants.GET_GNOME_REQUEST,
  payload,
});

export const getGnomeSuccess = (payload) => ({
  type: constants.GET_GNOME_SUCCESS,
  payload,
});

export const getGnomesPageRequest = (payload) => ({
  type: constants.GET_GNOMES_PAGE_REQUEST,
  payload,
});

export const getGnomesPageSuccess = (payload) => ({
  type: constants.GET_GNOMES_PAGE_SUCCESS,
  payload,
});

export const getGnomesSearchRequest = (payload) => ({
  type: constants.GET_GNOMES_SEARCH_REQUEST,
  payload,
});

export const getGnomesSearchSuccess = (payload) => ({
  type: constants.GET_GNOMES_SEARCH_SUCCESS,
  payload,
});
