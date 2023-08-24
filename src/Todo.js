import { useState } from "react";

export default () => {
  const [tasks, setTasks] = useState([
    "sleep early",
    "do yoga",
    "call your friends",
    "wash clothes",
  ]);
  const addTodo = (event) => {
    event.preventDefault();
    setTasks([...tasks, event.target.todo.value]);
    event.target.todo.value = "";
  };
  const deleteTodo = (indx) => {
    setTasks(tasks.filter((v, i) => i != indx));
  };
  const clearAll = () => {
    setTasks([]);
  };
  return (
    <div className="todo-area">
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="what do you want to do?"
          required
          name="todo"
        />
        <button className="btn">Add</button>
      </form>
      <h1 className="todoh1">
        <u>To-do list</u>
      </h1>
      <div>
        <button onClick={clearAll} className="btn">
          Clear All
        </button>
      </div>
      <div className="todo">
        {tasks.map((t, indx) => (
          <div className="todo-items">
            <div className="todo-todo-item"> {t}</div>

            <button
              className="del"
              onClick={() => {
                deleteTodo(indx);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
