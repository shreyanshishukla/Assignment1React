import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

export default ({ addEmp }) => {
  return (
    <form onSubmit={addEmp}>
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
        />
        <br />
      </div>
      <IconButton
        aria-label="delete"
        size="large"
        className="BTN"
        type="submit"
      >
        <AddIcon />
      </IconButton>
    </form>
  );
};
