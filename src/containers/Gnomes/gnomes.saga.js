import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./gnomes.contants";
import getGnomes from "./../../utils/api";
import * as G from "./gnomes.actions";

function* getGnomesEffect() {
  try {
    yield call(G.getGnomesRequest)
    const { Brastlewark } = yield call(getGnomes);
    yield put(G.getGnomesSuccess(Brastlewark));
  } catch (e) {
    console.error(e);
    yield put(G.getGnomesFailure(e));
  }
}

function* getGnomeEffect({ payload }) {
  try {
    yield call(G.getGnomesRequest)
    yield put(G.getGnomeSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

function* getGnomesPageEffect({ payload }) {
  try {
    yield call(G.getGnomesPageRequest)
    yield put(G.getGnomesPageSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

function* getGnomesSearchEffect({ payload }) {
  try {
    yield call(G.getGnomesSearchRequest)
    yield put(G.getGnomesSearchSuccess(payload));
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

