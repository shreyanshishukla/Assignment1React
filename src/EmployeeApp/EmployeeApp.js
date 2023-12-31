import { useState, forwardRef, useEffect } from "react";
import EmployeeAddForm from "./EmployeeAddForm";
import EmployeeList from "./EmployeeList";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchEmpAction,
  saveEmpAction,
  deleteEmpAction,
  deleteAllEmpAction,
} from "../actions/EmpAction";
export default () => {
  const [open, setOpen] = useState(0);
  const empData = useSelector((state) => state.emp);

  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(FetchEmpAction());
  }, []);

  const handleClick = () => {
    setOpen(1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(0);
  };
  const addEmp = (event) => {
    event.preventDefault();
    const payload = {
      name: event.target.name.value,
      age: event.target.age.value,
      salary: event.target.salary.value,
      city: event.target.city.value,
    };
    dispatcher(saveEmpAction(payload));
    handleClick();
  };

  const delEmp = (indx) => {
    dispatcher(deleteEmpAction(indx));
    setOpen(2);
  };
  const clearAll = async () => {
    dispatcher(deleteAllEmpAction());
    setOpen(3);
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Snackbar open={open == 1} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Employee Added
        </Alert>
      </Snackbar>
      <Snackbar open={open == 2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Employee Deleted
        </Alert>
      </Snackbar>
      <Snackbar open={open == 3} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          All Employees Deleted
        </Alert>
      </Snackbar>
      <div className="emp-form-div">
        <h1>Employee Application</h1>
        <EmployeeAddForm addEmp={addEmp} />
        <Button
          onClick={clearAll}
          variant="contained"
          className="BTN"
          disabled={empData.length == 0}
        >
          Clear All
        </Button>
      </div>
      <EmployeeList empData={empData} delEmp={delEmp} />
    </>
  );
};
