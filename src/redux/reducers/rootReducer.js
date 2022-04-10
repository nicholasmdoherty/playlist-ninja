import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import playlistReducer from "./playlistReducer";

export default combineReducers({
  api: apiReducer,
  playlist: playlistReducer
});
