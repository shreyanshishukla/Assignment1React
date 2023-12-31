import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import Appmain from "./Appmain";
import Footer from "./Footer/Footer";
import Counter from "./Counter/Counter";
import ClassCounter from "./ClassBasedCounter/ClassBasedCounter";
import { useState } from "react";
import StepCounter from "./StepCounter/StepCounter";
import Student from "./Student/Student";
import Todo from "./Todos/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import TodoMUI from "../src/MUI/TodoMUI";
import Ecommerce from "./Ecommerce/Ecommerce";
import Pokemon from "./Pokemon/Pokemon";
import UseRef from "./UseRef/UseRef";
import ReduxCounter from "./ReduxCounter/ReduxCounter";
import EmployeeApp from "./EmployeeApp/EmployeeApp";
import TodoReduc from "./TodoRedux/TodoReduc";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import LazyHome from "./LazyLoading/LazyHome";
import TodoForm from "./TodoForm";
import TodoItem from "./Todos/Todo-item";
import ForgotPassword from "./Login/ForgotPassword";
import Newsapp from "./Newsapp/Newsapp";
import CityData from "./Newsapp/CityData";
import Description from "./Newsapp/Description";

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
        <Menu
          day={"Day-3"}
          menus={["Pokemon", "UseRef", "ReduxCounter", "EmployeeApp"]}
        />
        <Menu day={"Day-4"} menus={["TodoRedux", "Expense-Tracker"]} />
        <Menu day={"Day-5"} menus={["LazyLoading", "Todoform", "Login"]} />
        <Menu day={"Day-6"} menus={["Newsapp", "Login"]} />

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
          <Route exact path="/Pokemon" element={<Pokemon />} />
          <Route exact path="/UseRef" element={<UseRef />} />
          <Route exact path="/ReduxCounter" element={<ReduxCounter />} />
          <Route exact path="/EmployeeApp" element={<EmployeeApp />} />
          <Route exact path="/TodoRedux" element={<TodoReduc />} />
          <Route exact path="/Expense-Tracker" element={<ExpenseTracker />} />
          <Route exact path="/LazyLoading" element={<LazyHome />} />
          <Route exact path="/Todoform" element={<TodoForm />} />
          <Route exact path="/Login" element={<Login />}>
            <Route exact path="forgotpassword" element={<ForgotPassword />} />
          </Route>
          <Route exact path="/Newsapp" element={<Newsapp />}>
            <Route exact path=":index" element={<CityData />}>
              <Route
                exact
                path="description/:id"
                element={<Description />}
              ></Route>
            </Route>
          </Route>
        </Routes>

        <Footer />

        {/* <Login />
         */}
      </BrowserRouter>
    </div>
  );
}

export default App;
