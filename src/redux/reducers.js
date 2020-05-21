import { combineReducers } from "redux";
import gnomesReducer from "./reducers/gnomes.reducer";

export default combineReducers({
  gnomes: gnomesReducer,
});
