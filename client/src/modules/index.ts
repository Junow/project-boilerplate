import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';


// 모든 리듀서를 합쳐줌
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// ts 를 위한 타입 export
export type RootState = ReturnType<typeof rootReducer>;
