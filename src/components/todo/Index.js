import React, { useState } from "react";

const Index = ({ todos, markAsDone, deleteTask }) => {
  const handleMarkAsDone = (event, index) => {
    markAsDone(index);
  };
  const handleDelete = (event, index) => {
    deleteTask(index);
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
                    onClick={(event) => handleMarkAsDone(event, i)}
                  />
                )}
                <input
                  type="button"
                  value="eliminar"
                  onClick={(event) => handleDelete(event, i)}
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
