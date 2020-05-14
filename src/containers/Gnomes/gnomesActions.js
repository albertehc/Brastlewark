import * as constants from './gnomesContants';

export const getGnomesStart = () => ({
  type: constants.GET_GNOMES_START
});

export const getGnomesSuccess = payload => ({
  type: constants.GET_GNOMES_SUCCESS,
  payload
});

export const getGnomesFailure = payload => ({
  type: constants.GET_GNOMES_FAILURE,
  payload
});