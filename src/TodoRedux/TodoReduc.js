import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, deleteAll } from "../actions/todoactions";
import store from "../Store/Store";

export default () => {
  const todostate = useSelector((state) => {
    return state.todo;
  });

  const dispatcher = useDispatch();
  console.log("store ", store);
  const addTodos = (event) => {
    event.preventDefault();
    const payload = {
      task: event.target.task.value,
      status: event.target.status.value,
    };
    dispatcher(addTodo(payload));
  };
  const deleTodo = (indx) => {
    dispatcher(delTodo({ indx }));
  };
  const clearAll = () => {
    dispatcher(deleteAll());
  };
  return (
    <div>
      Redux Todos
      <form onSubmit={addTodos} className="todo-form">
        <input name="task" placeholder="what do you want to do?" />{" "}
        <input name="status" placeholder="is it done or pending?" />
        <button className="btn"> Add</button>
      </form>
      <button onClick={clearAll} className="btn">
        Clear All
      </button>
      <div className="todo">
        {todostate.map((t, indx) => (
          <div className="todo-items">
            <div className="todo-todo-item">
              task: {t.task}
              <br />
              status:{t.status}
              <br />
              <button onClick={() => deleTodo(indx)} className="btn">
                Delete
              </button>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
