const initialState = {
  banglore: {
    index: 0,
    data: [
      {
        news: "heavy rain",
        description: "extreme rain fall on monday happened in majro parts",
      },
    ],
  },
  hyderabad: {
    index: 1,
    data: [
      {
        news: "heavy rain",
        description: "extreme rain fall on monday happened in majro parts",
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "addnews":
      return {
        ...state,
        [action.payload.city]: state[action.payload.city]
          ? {
              ...state[action.payload.city],
              data: [...state[action.payload.city].data, action.payload.body],
            }
          : { index: Object.keys(state).length, data: [action.payload.body] },
      };
    case "deletenews":
      return {
        ...state,
        [action.payload.city]: {
          ...state[action.payload.city],
          data: state[action.payload.city].data.filter(
            (c, i) => i != action.payload.indx
          ),
        },
      };
    case "clearnewsforcity":
      return {
        ...state,
        [action.payload]: { ...state[action.payload], data: [] },
      };
    case "clearallnews":
      return {};

    default:
      return state;
  }
};
