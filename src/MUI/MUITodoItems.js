import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default ({ deleteTodo, indx, t }) => {
  return (
    <div className="todo-items">
      <div className="todo-todo-item"> {t.name}</div>
      <div className="todo-todo-item"> {t.status}</div>

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => {
          deleteTodo(indx);
        }}
        className="BTN"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
