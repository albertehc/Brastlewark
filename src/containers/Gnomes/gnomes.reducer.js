import * as constants from "./gnomes.contants";
import Professions from "./../../assets/icons/professions";

const initialState = {
  gnomes: [],
  actualGnomes: [],
  loading: true,
  error: null,
  totalPages: 1,
  actualPage: 1,
  postPerPage: 10,
  average: 0,
  gnome: {},
  search: "",
  professions: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_GNOMES_PAGE_REQUEST:
    case constants.GET_GNOMES_REQUEST:
    case constants.GET_GNOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_GNOMES_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        search: payload,
      };
    case constants.GET_GNOMES_SUCCESS:
      const average =
        payload.reduce((avg, { height }, _, { length }) => {
          return avg + height / length;
        }, 0) /
        payload.reduce((avg, { weight }, _, { length }) => {
          return avg + weight / length;
        }, 0);
      const professions = Array.from(Object.keys(Professions));
      const gnomes = payload.map((e) => {
        if (e.height / e.weight > average) e.gender = "Male";
        else e.gender = "Female";
        return e;
      });
      return {
        ...state,
        gnomes,
        actualGnomes: gnomes,
        totalPages: Math.ceil(payload.length / state.postPerPage),
        average,
        loading: false,
        error: null,
        professions,
      };
    case constants.GET_GNOMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case constants.GET_GNOME_SUCCESS:
      return {
        ...state,
        actualGnomes: state.gnomes,
        gnome: state.gnomes.filter((e) => e.id === payload)[0],
        loading: false,
        search: "",
      };
    case constants.GET_GNOMES_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        actualPage: payload,
      };
    case constants.GET_GNOMES_SEARCH_SUCCESS:
      const actualGnomes = state.gnomes.filter((e) =>
        Object.keys(e).some((key) =>
          e[key].toString().toLowerCase().includes(payload.toLowerCase())
        )
      );
      return {
        ...state,
        loading: false,
        actualGnomes: actualGnomes,
        totalPages: Math.ceil(actualGnomes.length / state.postPerPage),
        actualPage: 1,
      };
    default:
      return state;
  }
};
