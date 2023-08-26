import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BadgeIcon from "@mui/icons-material/Badge";

export default ({ delEmp, indx, t }) => {
  return (
    <div className="todo-items">
      <BadgeIcon sx={{ height: "30px", margin: "2px" }}></BadgeIcon>
      <div className="todo-todo-item">
        {" "}
        <span className="textEmp">Employee: </span>
        {t.name}
      </div>
      <br />
      <div className="todo-todo-item">
        {" "}
        <span className="textEmp">Age: </span>
        {t.age}
      </div>
      <br />
      <div className="todo-todo-item">
        {" "}
        <span className="textEmp">Salary: </span>
        {t.salary}
      </div>
      <br />
      <div className="todo-todo-item">
        {" "}
        <span className="textEmp">City: </span>
        {t.city}
      </div>
      <br />
      <div className="todo-todo-item">
        {" "}
        <span className="textEmp">EmployeeID: </span>
        {t.employeeId}
      </div>
      <br />

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => {
          delEmp(indx);
        }}
        className="BTN"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
