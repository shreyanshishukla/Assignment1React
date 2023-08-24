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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TodoMUI from "./TodoMUI";
import Ecommerce from "./Ecommerce";
function App() {
  const students = ["apoorva", "kamran", "nidhi", "sana", "shreyanshi"];

  return (
    <div className="App">
      <BrowserRouter>
        <Menu
          day={"Day-1"}
          menus={[
            "Home",
            "About-Us",
            "Contact-Us",
            "Counter",
            "Class-based-counter",
            "step-counter",
          ]}
        />
        <Menu day={"Day-2"} menus={["Todos", "Students", "MUI", "Ecommerce"]} />

        <Routes>
          <Route exact path="/todos" element={<Todo />} />
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/Students"
            element={<Student students={students} />}
          />
          <Route
            exact
            path="/About-Us"
            element={
              <Appmain title="Welcomeee!!!Welcomeeeee!!!!!" hobby="eating " />
            }
          />
          <Route exact path="/step-counter" element={<StepCounter />} />
          <Route exact path="/Contact-Us" element={<Home />} />

          <Route exact path="/Counter" element={<Counter />} />
          <Route exact path="/Class-based-counter" element={<ClassCounter />} />
          <Route exact path="/MUI" element={<TodoMUI />} />
          <Route exact path="/Ecommerce" element={<Ecommerce />} />
        </Routes>

        <Footer />

        {/* <Login />
         */}
      </BrowserRouter>
    </div>
  );
}

export default App;
