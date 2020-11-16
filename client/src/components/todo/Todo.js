import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ToDo = ({ todo, i, markAsDone, deleteTask }) => {
  const handleMarkAsDone = (event, index, id) => {
    event.preventDefault();
    markAsDone(index, id);
  };
  const handleDelete = (event, index, id) => {
    deleteTask(index, id);
  };
  return (
    <tr
      key={i}
      style={{
        backgroundColor: todo.status === "pending" ? "white" : "#b6b6b6",
      }}
    >
      <td>#{i + 1}</td>
      <td>
        {todo.description}
        {todo.status === "pending" && (
          <Button
            variant="success"
            onClick={(event) => handleMarkAsDone(event, i, todo.id)}
            style={{ marginLeft: 1 + "vw" }}
          >
            Terminado
          </Button>
        )}
        <Button
          value="Eliminar"
          variant="danger"
          style={{ marginLeft: 1 + "vw" }}
          onClick={(event) => handleDelete(event, i, todo.id)}
        >
          Eliminar
        </Button>
        <Link to={`/${todo.id}`}>
          <Button style={{ marginLeft: 1 + "vw" }}>Ver Detalle</Button>
        </Link>
      </td>
    </tr>
  );
};

export default ToDo;
