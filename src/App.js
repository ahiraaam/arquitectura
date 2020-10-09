import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import TodoDetail from "./components/todo/TodoDetail";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/:id">
              <TodoDetail></TodoDetail>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
