import React, { useState } from "react";
import "./styles.css";
import ToDo from "./Todo";
import axios from "axios";
import { Table } from "react-bootstrap";

const ToDoList = ({ todos, setTodos }) => {
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
    <Table striped bordered hover>
      <thead>
        <th>#</th>
        <th>Task</th>
      </thead>
      <tbody>
        {todos.map((todo, i) => {
          return (
            <ToDo
              key={i}
              todo={todo}
              i={i}
              markAsDone={markAsDone}
              deleteTask={deleteTask}
            ></ToDo>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ToDoList;
