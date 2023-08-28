import { combineReducers, createStore } from "redux";
import countreducer from "../Reducers/countreducer";
import todoReducer from "../Reducers/todoreducer";

let store = createStore(
  combineReducers({ count: countreducer, todo: todoReducer })
);
export default store;
