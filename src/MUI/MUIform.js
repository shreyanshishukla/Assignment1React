import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
export default ({ addTodo }) => {
  return (
    <form onSubmit={addTodo} className="todo-form">
      <br />
      <TextField
        id="standard-textarea"
        label="Todo-Item"
        placeholder="what do you want to do?"
        multiline
        variant="standard"
        name="todo"
        required
      />{" "}
      <TextField
        id="standard-textarea"
        label="Todo-Status"
        placeholder="what do you want to do?"
        multiline
        variant="standard"
        name="status"
        required
      />
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
