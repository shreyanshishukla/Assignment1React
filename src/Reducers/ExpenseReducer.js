const initialState = [{ name: "sdsd", amount: "32432" }];
export default (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "del":
      return state.filter((v, i) => i != action.payload);
    case "clear":
      return [];
    default:
      return state;
  }
};
