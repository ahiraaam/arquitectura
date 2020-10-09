import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./components/todo/Create";
import ToDoList from "./components/todo/ToDoList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
    console.log("FETCH");
  }, []);

  const fetchTodos = async () => {
    await axios("http://localhost:8000/").then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
    //setTodos(result.data);
  };

  const addTodo = async (description) => {
    let cTodos = Object.assign([], todos);
    console.log(cTodos);

    await axios
      .post("http://localhost:8000/", {
        description: description,
        status: "pending",
      })
      .then((res) => {
        console.log(res.data.id[0]);
        cTodos.push({
          id: res.data.id[0],
          description: description,
          status: "pending",
        });
        console.log(cTodos);
      });
    setTodos(cTodos);
  };

  return (
    <>
      <h1>Todo list</h1>
      <Create addTodo={addTodo}></Create>
      <br></br>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
    </>
  );
}

export default App;
