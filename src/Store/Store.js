import { createStore } from "redux";
import countreducer, { initialState } from "../Reducers/countreducer";
let store = createStore(countreducer);
export default store;
