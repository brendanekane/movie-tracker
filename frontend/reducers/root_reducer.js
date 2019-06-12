import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import userReducer from './user_reducer';
import sessionReducer from './session_reducer';


const rootReducer = combineReducers({
  movies: moviesReducer,
  users: userReducer,
  session: sessionReducer
});

export default rootReducer;
