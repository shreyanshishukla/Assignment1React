import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

export default ({ addEmp }) => {
  return (
    <form onSubmit={addEmp} className="empform">
      <br />
      <div className="formdatainput">
        <label for="name">Name of the Employee</label>
        <TextField
          id="standard-textarea"
          label="Name"
          placeholder="Employee Name?"
          multiline
          variant="standard"
          name="name"
          sx={{
            marginLeft: "10px",
          }}
          required
        />
        <br />
      </div>
      <div className="formdatainput">
        <label for="name">Age</label>
        <TextField
          id="standard-textarea"
          label="Age"
          placeholder=" Age?"
          multiline
          variant="standard"
          name="age"
          required
          sx={{
            marginLeft: "10px",
          }}
        />
        <br />
      </div>
      <div className="formdatainput">
        <label for="name">Salary</label>

        <TextField
          id="standard-textarea"
          label="salary"
          placeholder=" Salary?"
          multiline
          variant="standard"
          name="salary"
          required
          sx={{
            marginLeft: "10px",
          }}
        />
        <br />
      </div>
      <div className="formdatainput">
        <label for="name">City</label>
        <TextField
          id="standard-textarea"
          label="Employee City"
          placeholder="city?"
          multiline
          variant="standard"
          name="city"
          required
          sx={{
            marginLeft: "10px",
          }}
        />
        <br />
      </div>
      <IconButton
        aria-label="delete"
        size="larger"
        className="BTN"
        type="submit"
        color="primary"
        sx={{ margin: "10px" }}
      >
        <AddIcon
          sx={{
            fontSize: "40px",
          }}
        />
      </IconButton>
    </form>
  );
};
