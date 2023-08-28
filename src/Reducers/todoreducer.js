const initialState = [
  {
    task: "have coffee",
    status: "pending",
  },
  {
    task: "drink water",
    status: "pending",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];
    case "delTodo":
      return state.filter((v, indx) => indx != action.payload.indx);
    case "delAll":
      return [];
    default:
      return state;
  }
};
