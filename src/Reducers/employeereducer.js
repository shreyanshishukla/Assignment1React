const initialState = [{ name: "anmit" }];

export default (state = initialState, action) => {
  switch (action.type) {
    case "getEmp":
      return action.payload;
    default:
      return state;
  }
};
