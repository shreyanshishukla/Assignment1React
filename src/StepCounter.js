import { useState } from "react";

const StepCounter = () => {
  const [hide, setHide] = useState(false);
  const [step, setStep] = useState(4);
  const [counter, setCounter] = useState(0);

  const inpoEle = document.getElementById("inpt");

  function toggle() {
    setHide(!hide);
  }
  function inc() {
    setCounter(counter + step);
  }
  function dec() {
    setCounter(counter - step);
  }
  function reset() {
    setCounter(0);
  }
  return (
    <div className="Stepcounter">
      {hide ? "" : <h3>Assignment 1</h3>}
      <br />
      <button onClick={toggle} className="btn">
        <b>Hide/Show heading</b>
      </button>
      <br />
      <h3>Step :{step}</h3>
      <h3>Counter:{counter}</h3>
      <button onClick={inc} className="btn">
        <b>Increase by Step</b>
      </button>
      <button onClick={dec} className="btn">
        <b>Decrease by Step</b>
      </button>
      <button onClick={reset} className="btn">
        <b>Reset</b>
      </button>
    </div>
  );
};

export default StepCounter;
