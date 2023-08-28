import { useState } from "react";
import Todoform from "./Todoform";
import ClearTodoForm from "./ClearTodoForm";
import Todoitem from "./Todo-item.js";

export default () => {
  const [tasks, setTasks] = useState([
    "sleep early",
    "do yoga",
    "call your friends",
    "wash clothes",
  ]);

  const deleteTodo = (indx) => {
    setTasks(tasks.filter((v, i) => i != indx));
  };
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="todo-area">
      <h1 className="todoh1">
        <u>To-do list</u>
      </h1>
      <Todoform tasks={tasks} setTasks={setTasks} />
      <ClearTodoForm clearAll={clearAll} />
      <div className="todo">
        {tasks.map((t, indx) => (
          <Todoitem t={t} deleteTodo={deleteTodo} indx={indx}></Todoitem>
        ))}
      </div>
    </div>
  );
};
//boilerplate
