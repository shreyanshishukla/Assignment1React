import { useEffect, useState } from "react";

import axios from "axios";
import MUIform from "./MUIform";
import MUIbtns from "./MUIbtns";
import MUITodoList from "./MUITodoList";

export default () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  // const sendData()
  const addTodo = async (event) => {
    event.preventDefault();
    await axios.post("todos", {
      name: event.target.todo.value,
      status: event.target.status.value,
    });
    event.target.todo.value = "";
    event.target.status.value = "";
    getData();
  };

  const deleteTodo = async (indx) => {
    await axios.delete(`todos/delete/${indx}`);
    getData();
  };

  const clearAll = async () => {
    await axios.delete(`todos/deleteall`);
    getData();
  };

  const getData = async () => {
    await axios
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
      <MUIform addTodo={addTodo} />
      <MUIbtns getData={getData} clearAll={clearAll} />
      <MUITodoList deleteTodo={deleteTodo} tasks={tasks} />

      <br />
      <br />
    </div>
  );
};
