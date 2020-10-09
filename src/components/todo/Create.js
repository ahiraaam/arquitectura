import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Create = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event) => {
    let val = event.target.value;
    setTodo(val);
  };

  const handleCreateClick = (event) => {
    addTodo(todo);
    setTodo("");
  };
  return (
    <Form>
      <Form.Group controlId="formCreate">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={todo}
          id="create-form"
          onChange={handleTodoChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleCreateClick}>
        Add Todo
      </Button>
    </Form>
  );
};

export default Create;
