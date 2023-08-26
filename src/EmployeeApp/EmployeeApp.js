import { useState, forwardRef, useEffect } from "react";
import EmployeeAddForm from "./EmployeeAddForm";
import EmployeeList from "./EmployeeList";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
export default () => {
  const [empData, setEmpData] = useState([]);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    getEmpData();
  }, []);
  const getEmpData = () => {
    axios.get("/employee").then((data) => setEmpData(data.data));
  };

  const handleClick = () => {
    setOpen(1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(0);
  };
  const addEmp = async (event) => {
    event.preventDefault();
    await axios.post("/employee", {
      name: event.target.name.value,
      age: event.target.age.value,
      salary: event.target.salary.value,
      city: event.target.city.value,
    });
    getEmpData();
    handleClick();
  };

  const delEmp = async (indx) => {
    await axios.delete(`/employee/${indx}`);
    getEmpData();
    setOpen(2);
  };
  const clearAll = async () => {
    await axios.delete("/deleteemployee");
    getEmpData();
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

      <h1>Employee Application</h1>
      <EmployeeAddForm addEmp={addEmp} />
      <Button onClick={clearAll} variant="contained" className="BTN">
        Clear All
      </Button>
      <EmployeeList empData={empData} delEmp={delEmp} />
    </>
  );
};
