import postsReducer from './postsReducer';
import titleReducer from './titleReducer';
import { combineReducers } from "redux";

export default combineReducers({
  postsReducer,
  titleReducer,
});