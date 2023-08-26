import { useDispatch, useSelector } from "react-redux";
export default () => {
  const [count] = useSelector((state) => {
    return [state.count];
  });
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch({ type: "increase" });
  };
  const decreaseCount = () => {
    dispatch({ type: "decrease" });
  };
  const resetCount = () => {
    dispatch({ type: "reset" });
  };
  return (
    <>
      <div>Count={count}</div>
      <button onClick={increaseCount}>INC</button>
      <button onClick={decreaseCount}>DEC</button>
      <button onClick={resetCount}>RESET</button>
    </>
  );
};
