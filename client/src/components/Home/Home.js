import React, { useState, useEffect } from "react";

import Create from "../todo/Create";
import ToDoList from "../todo/ToDoList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
    console.log("FETCH");
  }, []);

  const fetchTodos = async () => {
    await axios("/api/").then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
    //setTodos(result.data);
  };

  const addTodo = async (description) => {
    let cTodos = Object.assign([], todos);
    console.log(cTodos);

    await axios
      .post("/api/", {
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

export default Home;
