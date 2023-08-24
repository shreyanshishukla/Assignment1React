import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  // const sendData()
  const addTodo = (event) => {
    event.preventDefault();
    setTasks([
      ...tasks,
      { name: event.target.todo.value, status: event.target.status.value },
    ]);
    event.target.todo.value = "";
  };
  const deleteTodo = (indx) => {
    setTasks(tasks.filter((v, i) => i != indx));
  };
  const clearAll = () => {
    setTasks([]);
  };
  const getData = () => {
    axios
      .get("todos")
      .then((res) => {
        console.log("getting data", res);
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="todo-area">
      <h1 className="todoh1">
        <u>To-do list</u>
      </h1>
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
      <br />
      <br />
      <div>
        <Button onClick={getData} variant="contained" className="BTN">
          Get-Data
        </Button>
        <br />
        <br />

        <Button onClick={clearAll} variant="contained" className="BTN">
          Clear All
        </Button>
        <br />
        <br />
      </div>
      <div className="todo">
        {tasks.map((t, indx) => (
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
        ))}
      </div>
    </div>
  );
};
