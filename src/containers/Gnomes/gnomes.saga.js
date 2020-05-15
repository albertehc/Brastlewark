import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./gnomes.contants";
import getGnomes from "./../../utils/api";
import {
  getGnomesRequest,
  getGnomesSuccess,
  getGnomesFailure,
  getGnomeSuccess,
  getGnomesPageRequest,
  getGnomesPageSuccess,
  getGnomesSearchRequest,
  getGnomesSearchSuccess
} from "./gnomes.actions";

function* getGnomesEffect() {
  try {
    yield call(getGnomesRequest)
    const { Brastlewark } = yield call(getGnomes);
    yield put(getGnomesSuccess(Brastlewark));
  } catch (e) {
    console.error(e);
    yield put(getGnomesFailure(e));
  }
}

function* getGnomeEffect({ payload }) {
  try {
    yield call(getGnomesRequest)
    yield put(getGnomeSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

function* getGnomesPageEffect({ payload }) {
  try {
    yield call(getGnomesPageRequest)
    yield put(getGnomesPageSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

function* getGnomesSearchEffect({ payload }) {
  try {
    yield call(getGnomesSearchRequest)
    yield put(getGnomesSearchSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

function* gnomesSagas() {
	yield takeLatest(constants.GET_GNOMES_REQUEST, getGnomesEffect);
  yield takeLatest(constants.GET_GNOME_REQUEST, getGnomeEffect);
  yield takeLatest(constants.GET_GNOMES_PAGE_REQUEST, getGnomesPageEffect);
  yield takeLatest(constants.GET_GNOMES_SEARCH_REQUEST, getGnomesSearchEffect);
}
export default gnomesSagas;

