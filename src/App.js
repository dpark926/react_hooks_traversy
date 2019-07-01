import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button
          onClick={() => {
            completeTodo(index);
          }}
        >
          Complete
        </button>
        <button
          onClick={() => {
            removeTodo(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = idx => {
    const newTodos = [...todos];
    newTodos[idx].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = idx => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, idx) => {
          return (
            <Todo
              key={idx}
              index={idx}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
