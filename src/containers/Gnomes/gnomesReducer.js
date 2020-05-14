import * as constants from "./gnomesContants";

const initialState = {
  gnomes: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_GNOMES_START:
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
    default:
      return state;
  }
};
