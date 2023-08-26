export default ({ deleteTodo, t, indx }) => {
  return (
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
  );
};
