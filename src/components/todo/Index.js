import React, { useState } from "react";

const Index = ({ todos, markAsDone, deleteTask }) => {
  const handleMarkAsDone = (event, index, id) => {
    event.preventDefault();
    markAsDone(index, id);
  };
  const handleDelete = (event, index, id) => {
    deleteTask(index, id);
  };

  return (
    <table border="1">
      <thead>
        <th>#</th>
        <th>Task</th>
      </thead>
      <tbody>
        {todos.map((todo, i) => {
          return (
            <tr
              key={i}
              style={{
                backgroundColor: todo.status == "pending" ? "white" : "grey",
              }}
            >
              <td>#{i + 1}</td>
              <td>{todo.description}</td>
              <td>
                {todo.status == "pending" && (
                  <input
                    type="button"
                    value="terminado?"
                    onClick={(event) => handleMarkAsDone(event, i, todo.id)}
                  />
                )}
                <input
                  type="button"
                  value="eliminar"
                  onClick={(event) => handleDelete(event, i, todo.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Index;
