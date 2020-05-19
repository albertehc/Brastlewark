import { combineReducers } from "redux";
import gnomesReducer from "./containers/Gnomes/gnomes.reducer";

export default combineReducers({
  gnomes: gnomesReducer,
});
