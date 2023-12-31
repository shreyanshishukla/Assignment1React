import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    console.log("state chnged");
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const showCount = () => {
    alert(count);
  };
  return (
    <div className="counter">
      <h1 className="count">{count}</h1>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
      <button className="btn" onClick={showCount}>
        Show Count
      </button>
      <br />
    </div>
  );
};
export default Counter;
