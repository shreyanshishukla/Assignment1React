import { useRef } from "react";

export default () => {
  const inpt1 = useRef(null);
  const inpt2 = useRef(null);
  const h1ref = useRef(null);
  const showRef = () => {
    console.log(inpt1.current);
    console.log(inpt2.current);
    h1ref.current.textContent = `${inpt1.current.value} , ${inpt2.current.value}`;
  };
  return (
    <div>
      <br />
      <input ref={inpt1} type="text" />
      {"  "}
      <input ref={inpt2} type="text" />
      <h1 ref={h1ref}>HIIIII from me for me</h1>
      <button onClick={showRef}>Show values</button>
    </div>
  );
};
