import React from "react";
import "./styles.css";
import ToDo from "./Todo";
import axios from "axios";
import { Table } from "react-bootstrap";

const ToDoList = ({ todos, setTodos }) => {
  const markAsDone = async (i, idTask) => {
    let cTodos = Object.assign([], todos);
    await axios
      .post("/api/changeStatus", {
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
      .post("/api/deleteTask", {
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
        <tr>
          <th>#</th>
          <th>Task</th>
        </tr>
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
