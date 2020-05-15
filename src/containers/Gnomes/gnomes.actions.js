import * as constants from './gnomes.contants';

export const getGnomesRequest = () => ({
  type: constants.GET_GNOMES_REQUEST
});

export const getGnomesSuccess = payload => ({
  type: constants.GET_GNOMES_SUCCESS,
  payload
});

export const getGnomesFailure = payload => ({
  type: constants.GET_GNOMES_FAILURE,
  payload
});

export const getGnomeRequest = payload => ({
  type: constants.GET_GNOME_REQUEST,
  payload
});

export const getGnomeSuccess = payload => ({
  type: constants.GET_GNOME_SUCCESS,
  payload
});