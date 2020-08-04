import { combineReducers } from 'redux';

import appStateReducer from './app-state.reducer';

const reducers = combineReducers({
  appState: appStateReducer,
});

export default reducers;
