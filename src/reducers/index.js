
import { combineReducers } from 'redux';
import currentPos from './currentPos';
import inputs from './inputs';

const rootReducer = combineReducers({
  currentPos,
  inputs
});

export default rootReducer;