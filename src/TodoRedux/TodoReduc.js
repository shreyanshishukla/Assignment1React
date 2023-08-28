import { useDispatch, useSelector } from "react-redux";
import {
  postAction,
  deleteAction,
  deleteAll,
  fetchAction,
  deleteAllAction,
} from "../actions/todoactions";
import { useEffect } from "react";

export default () => {
  const todostate = useSelector((state) => {
    return state.todo;
  });

  const dispatcher = useDispatch();
  const addTodos = (event) => {
    event.preventDefault();
    const payload = {
      name: event.target.task.value,
      status: event.target.status.value,
    };
    dispatcher(postAction(payload));
  };
  const fetchall = () => {
    dispatcher(fetchAction());
  };
  const deleTodo = (indx) => {
    dispatcher(deleteAction({ indx }));
  };
  const clearAll = () => {
    dispatcher(deleteAllAction());
  };

  useEffect(() => {
    dispatcher(fetchAction());
  }, []);
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
      <button onClick={fetchall} className="btn">
        Fetch
      </button>
      <div className="todo">
        {todostate.map((t, indx) => (
          <div className="todo-items">
            <div className="todo-todo-item">
              task: {t.name}
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
