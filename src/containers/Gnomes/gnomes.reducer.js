import * as constants from "./gnomes.contants";

const initialState = {
  gnomes: [],
  loading: true,
  error: null,
  totalPages: 1,
  actualPage: 1,
  gnome: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_GNOMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case constants.GET_GNOMES_SUCCESS:
      return {
        ...state,
        gnomes: payload,
        loading: false,
        error: null,
      };
    case constants.GET_GNOMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case constants.GET_GNOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_GNOME_SUCCESS:
      return {
        ...state,
        gnome: state.gnomes.filter(e=> e.id === payload)[0],
        loading: false,
      };
    default:
      return state;
  }
};
