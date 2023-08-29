import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  clearExpense,
  delExpense,
} from "../actions/expenseTracker";

export default () => {
  const expenses = useSelector((state) => {
    console.log(state);
    return state.expense;
  });
  console.log("exp", expenses);
  const dispatcher = useDispatch();
  const addExp = (event) => {
    event.preventDefault();
    dispatcher(
      addExpense({
        name: event.target.name.value,
        amount: event.target.amount.value,
      })
    );
  };
  const deleteExp = (indx) => {
    dispatcher(delExpense(indx));
  };
  const clear = () => {
    dispatcher(clearExpense());
  };
  return (
    <>
      <div>Expense Tracker</div>
      <form onSubmit={addExp}>
        <input name="name" />
        <input name="amount" type="number" />
        <button type="submit">Add</button>
      </form>
      <button onClick={clear}>Clear All</button>
      <div>
        {expenses.map((exp, i) => (
          <div>
            {exp.name}
            {exp.amount}
            <button onClick={() => deleteExp(i)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
