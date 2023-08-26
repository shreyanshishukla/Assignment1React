export default ({ tasks, setTasks }) => {
  const addTodo = (event) => {
    event.preventDefault();
    setTasks([...tasks, event.target.todo.value]);
    event.target.todo.value = "";
  };
  return (
    <form onSubmit={addTodo} className="todo-form">
      <input
        type="text"
        placeholder="what do you want to do?"
        required
        name="todo"
      />
      <button className="btn">Add</button>
    </form>
  );
};
