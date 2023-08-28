import axios from "axios";

export const FetchEmpAction = () => {
  return (dispatch) => {
    axios
      .get("/employee")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "getEmp", payload: res.data });
      })
      .catch((error) => console.log(error));
  };
};
export const saveEmpAction = (payload) => {
  return (dispatch) => {
    axios
      .post("/employee", payload)
      .then((res) => {
        console.log(res.data);
        dispatch(FetchEmpAction());
      })
      .catch((error) => console.log(error));
  };
};
export const deleteEmpAction = (payload) => {
  return (dispatch) => {
    axios
      .delete(`/employee/${payload}`)
      .then((res) => {
        dispatch(FetchEmpAction());
      })
      .catch((error) => console.log(error));
  };
};
export const deleteAllEmpAction = () => {
  return (dispatch) => {
    axios
      .delete(`/deleteemployee`)
      .then((res) => {
        dispatch(FetchEmpAction());
      })
      .catch((error) => console.log(error));
  };
};
