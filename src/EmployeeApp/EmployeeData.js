import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BadgeIcon from "@mui/icons-material/Badge";
import Avatar from "@mui/material/Avatar";

export default ({ delEmp, indx, t }) => {
  return (
    <div className="emp-items">
      <Avatar
        src="/broken-image.jpg"
        sx={{
          height: "40px",
          margin: "2px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          justifySelf: "center",
          paddingTop: "5px",
          color: "#e3832a",
          backgroundColor: "white",
        }}
      />
      <br />
      <div className="emp-item">
        <span className="textEmp">Employee: {t.name}</span>
      </div>
      <br />
      <div className="emp-item">
        {" "}
        <span className="textEmp">Age: {t.age}</span>
      </div>
      <br />
      <div className="emp-item">
        {" "}
        <span className="textEmp">Salary: {t.salary}</span>
      </div>
      <br />
      <div className="todo-todo-item">
        {" "}
        <span className="textEmp">City: {t.city}</span>
      </div>
      <br />
      <div className="emp-item">
        <BadgeIcon
          sx={{ display: "flex", alignSelf: "self-end", padding: "6px" }}
        ></BadgeIcon>
        <span className="textEmp">
          EmployeeID:
          {t.employeeId}
        </span>
      </div>
      <br />

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => {
          delEmp(indx);
        }}
        className="BTN"
        sx={{
          color: "#e3832a",
          margin: "10px",
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
