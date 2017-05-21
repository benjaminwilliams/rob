
import { combineReducers } from 'redux';
import robotPos from './robotPos';
import inputs from './inputs';
import log from './log';

const rootReducer = combineReducers({
  robotPos,
  inputs,
  log
});

export default rootReducer;