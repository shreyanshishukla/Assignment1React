import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  reset,
  increaseage,
  decreaseage,
  resetage,
} from "../actions/counteraction";
export default () => {
  const [count, age] = useSelector((state) => {
    return [state.count.count, state.count.age];
  });

  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(increase());
  };
  const decreaseCount = () => {
    dispatch(decrease());
  };
  const resetCount = () => {
    dispatch(reset());
  };
  const increaseAge = () => {
    dispatch(increaseage());
  };
  const decreaseAge = () => {
    dispatch(decreaseage());
  };
  const resetAge = () => {
    dispatch(resetage());
  };
  return (
    <>
      <div>Count={count}</div>
      <button onClick={increaseCount}>INC</button>
      <button onClick={decreaseCount}>DEC</button>
      <button onClick={resetCount}>RESET</button>
      <div>Age={age}</div>
      <button onClick={increaseAge}>INC</button>
      <button onClick={decreaseAge}>DEC</button>
      <button onClick={resetAge}>RESET</button>
    </>
  );
};
