import * as constants from "./gnomes.contants";

const initialState = {
  gnomes: [],
  actualGnomes: [],
  loading: true,
  error: null,
  totalPages: 1,
  actualPage: 1,
  postPerPage: 21,
  gnome: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_GNOMES_SEARCH_REQUEST:
    case constants.GET_GNOMES_PAGE_REQUEST:
    case constants.GET_GNOMES_REQUEST:
    case constants.GET_GNOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_GNOMES_SUCCESS:
      return {
        ...state,
        gnomes: payload,
        actualGnomes: payload,
        totalPages: Math.ceil(payload.length / state.postPerPage),
        loading: false,
        error: null,
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
        gnome: state.gnomes.filter((e) => e.id === payload)[0],
        loading: false,
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
