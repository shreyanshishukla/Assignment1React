import MUITodoItems from "./MUITodoItems";

export default ({ tasks, deleteTodo }) => {
  return (
    <div className="todo">
      {tasks.map((t, indx) => (
        <MUITodoItems deleteTodo={deleteTodo} t={t} indx={indx} />
      ))}
    </div>
  );
};
