import { createStore } from 'redux';
import rootReducer from './reducers/index';

const currentPos =[0,0,"N"];

const defaultState = {
  currentPos,
  inputs: []
};

const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
