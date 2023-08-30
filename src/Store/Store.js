import { combineReducers, createStore, applyMiddleware } from "redux";
import countreducer from "../Reducers/countreducer";
import todoReducer from "../Reducers/todoreducer";
import employeereducer from "../Reducers/employeereducer";
import thunk from "redux-thunk";
import expenseTracker from "../Reducers/ExpenseReducer";
import Newsappreducer from "../Reducers/Newsappreducer";
let store = createStore(
  combineReducers({
    count: countreducer,
    todo: todoReducer,
    emp: employeereducer,
    expense: expenseTracker,
    newsapp: Newsappreducer,
  }),
  applyMiddleware(thunk)
);
export default store;
