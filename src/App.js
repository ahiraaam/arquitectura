import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./components/todo/Create";
import Index from "./components/todo/Index";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
    console.log("FETCH");
  }, []);

  const fetchTodos = async () => {
    const result = await axios("http://localhost:8000/").then((res) => {
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

  const markAsDone = async (i, idTask) => {
    let cTodos = Object.assign([], todos);
    await axios
      .post("http://localhost:8000/changeStatus", {
        id: idTask,
      })
      .then((res) => {
        console.log(res);
        cTodos[i].status = "done";
        setTodos(cTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTask = async (i, idTask) => {
    let cTodos = Object.assign([], todos);
    console.log(idTask);
    cTodos.splice(i, 1);
    await axios
      .post("http://localhost:8000/deleteTask", {
        id: idTask,
      })
      .then((res) => {
        console.log(res);
        setTodos(cTodos);
      });
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
