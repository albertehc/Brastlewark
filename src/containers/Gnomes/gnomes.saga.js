import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./gnomes.contants";
import getGnomes from "./../../utils/api";
import {
  getGnomesRequest,
  getGnomesSuccess,
  getGnomesFailure,
  getGnomeSuccess,
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

function* gnomesSagas() {
	yield takeLatest(constants.GET_GNOMES_REQUEST, getGnomesEffect);
	yield takeLatest(constants.GET_GNOME_REQUEST, getGnomeEffect);
}
export default gnomesSagas;