import { combineReducers, createStore, applyMiddleware } from "redux";
import countreducer from "../Reducers/countreducer";
import todoReducer from "../Reducers/todoreducer";
import employeereducer from "../Reducers/employeereducer";
import thunk from "redux-thunk";
let store = createStore(
  combineReducers({
    count: countreducer,
    todo: todoReducer,
    emp: employeereducer,
  }),
  applyMiddleware(thunk)
);
export default store;
