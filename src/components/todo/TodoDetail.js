import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
const TodoDetail = () => {
  let { id } = useParams();

  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getTodo();
    console.log("task get");
  }, []);

  const getTodo = async () => {
    await axios(`api/${id}`).then((result) => {
      console.log(result.data);
      setTodo(result.data);
    });
  };

  return (
    <Card>
      {" "}
      <Card.Header as="h5">Task: {todo.id}</Card.Header>
      <Card.Body>
        <Card.Title>{todo.description}</Card.Title>
        <Card.Text>{todo.status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TodoDetail;
