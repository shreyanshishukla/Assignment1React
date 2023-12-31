const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];
    case "delTodo":
      return state.filter((v, indx) => indx != action.payload.indx);
    case "delAll":
      return [];
    case "fetchTodos":
      return action.payload;
    default:
      return state;
  }
};
