import { combineReducers } from 'redux';
import counter from '../store/reducers/counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
