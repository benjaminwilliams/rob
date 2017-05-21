
import { combineReducers } from 'redux';
import robotPos from './robotPos';
import inputs from './inputs';

const rootReducer = combineReducers({
  robotPos,
  inputs
});

export default rootReducer;