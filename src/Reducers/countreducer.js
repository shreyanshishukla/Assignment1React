export const initialState = { count: 3 };

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
  return state;
};
