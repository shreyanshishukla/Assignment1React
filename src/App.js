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
import Student from "./Student";
import Todo from "./Todo";
function App() {
  const [show, setShow] = useState(false);
  const hide = () => {
    setShow(!show);
  };
  const students = ["apoorva", "kamran", "nidhi", "sana", "shreyanshi"];

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
      <hr />
      <Student students={students} />
      <hr />
      <Todo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <Login />
       */}
    </div>
  );
}

export default App;
