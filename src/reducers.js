import { combineReducers } from 'redux';
import gnomesReducer from './containers/Gnomes/gnomesReducer';

export default combineReducers({
  gnomes: gnomesReducer
});