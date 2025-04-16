import { combineReducers } from "redux";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof allReducers>; // Tạo kiểu cho toàn bộ state

export default allReducers;
