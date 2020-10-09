import React from "react";
import { Button } from "react-bootstrap";

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
        backgroundColor: todo.status == "pending" ? "white" : "#b6b6b6",
      }}
    >
      <td>#{i + 1}</td>
      <td>{todo.description}</td>
      <td>
        {todo.status == "pending" && (
          <Button
            variant="success"
            onClick={(event) => handleMarkAsDone(event, i, todo.id)}
          >
            Terminado
          </Button>
        )}
        <Button
          value="Eliminar"
          variant="danger"
          onClick={(event) => handleDelete(event, i, todo.id)}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ToDo;
