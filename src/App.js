import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./components/todo/Create";
import Index from "./components/todo/Index";

function App() {
  const [todos, setTodos] = useState([
    { description: "Create main folder", status: "pending" },
    { description: "Move to main folder", status: "pending" },
    { description: "Start npm in the folder", status: "pending" },
  ]);

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    cTodos.push({ description: description, status: "pending" });
    setTodos(cTodos);
  };
  const markAsDone = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos[task].status = "done";
    setTodos(cTodos);
  };
  const deleteTask = (task) => {
    let cTodos = Object.assign([], todos);
    cTodos.splice(task, 1);
    setTodos(cTodos);
  };
  return (
    <>
      <h1>Todo list</h1>
      <Create addTodo={addTodo}></Create>
      <Index
        todos={todos}
        markAsDone={markAsDone}
        deleteTask={deleteTask}
      ></Index>
    </>
  );
}

export default App;
