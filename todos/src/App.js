import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {


  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed Puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water Plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "User One" },
    {
      rowNumber: 4,
      rowDescription: "Charge Phone Battery",
      rowAssigned: "User One",
    },
  ]);



  const addTodo = (assigned, description) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,  
      rowAssigned: assigned,
    };

    setTodos((todos) => [...todos, newTodo]);
  };



  const deleteTodo = (deleteTodoRowNumber) => {
    let filteredArray = todos.filter(value => {
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filteredArray);
  }


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="class-body p-3">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />

          <button className="btn btn-primary">
            Add new todo
          </button>

          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
