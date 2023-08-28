export const initialState = { count: 3, age: 2 };

export default (state = initialState, ACTION) => {
  if (ACTION.type == "increase") {
    const newState = { ...state, count: state.count + 1 };
    return newState;
  }
  if (ACTION.type == "decrease") {
    const newState = { ...state, count: state.count - 1 };
    return newState;
  }
  if (ACTION.type == "reset") {
    const newState = { ...state, count: initialState.count };
    return newState;
  }
  if (ACTION.type == "increaseage") {
    const newState = { ...state, age: state.age + 1 };
    return newState;
  }
  if (ACTION.type == "decreaseage") {
    const newState = { ...state, age: state.age - 1 };
    return newState;
  }
  if (ACTION.type == "resetage") {
    const newState = { ...state, age: initialState.age };
    return newState;
  }
  return state;
};
