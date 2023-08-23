import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Menu from "./Menu";
import Appmain from "./Appmain";
import Footer from "./Footer";
import Counter from "./Counter";
import ClassCounter from "./ClassBasedCounter";
import { useState } from "react";
import StepCounter from "./StepCounter";
function App() {
  const [show, setShow] = useState(false);
  const hide = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <Menu />
      <Appmain title="Welcomeee!!!Welcomeeeee!!!!!" hobby="eating " />
      <Footer />
      <Counter />
      <hr />
      <p>Class based counter</p>
      <button onClick={hide}>Show/Hide</button>
      {show ? "" : <ClassCounter />}
      <hr />
      <StepCounter />
      {/* <Login />
       */}
    </div>
  );
}

export default App;
