import axios from "axios";

export const fetchAction = () => {
  return (dispatch) => {
    axios
      .get("/todos")
      .then((res) => {
        dispatch({ type: "fetchTodos", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const postAction = (payload) => {
  return (dispatch) => {
    axios
      .post("/todos", payload)
      .then((res) => {
        dispatch(fetchAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteAction = (payload) => {
  return (dispatch) => {
    axios
      .delete(`/todos/${payload.indx}`)
      .then((res) => {
        dispatch(fetchAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteAllAction = () => {
  return (dispatch) => {
    axios
      .delete(`/todosall`)
      .then((res) => {
        dispatch(fetchAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
