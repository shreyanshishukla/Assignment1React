import { useState } from "react";

const StepCounter = () => {
  const [hide, setHide] = useState(false);
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const inpoEle = document.getElementById("inpt");

  function toggle() {
    setHide(!hide);
  }
  function changeStep() {
    setStep(3);
    // inpoEle.value = "";
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
      <button onClick={toggle}>Hide/Show heading</button>
      <br />
      <h3>Step :{step}</h3>
      <h3>Counter:{counter}</h3>
      <button onClick={inc}>Increase by Step</button>
      <button onClick={dec}>Decrease by Step</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StepCounter;
