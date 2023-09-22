import React, { useState } from "react";
import "./App.css";
import Todoform from "./component/Todoform";
import TodoList from "./component/TodoList";

const App = () => {
  const [todo, setTodo] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      console.log(editTodo);
      const UpdatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
     // console.log(UpdatedTodos);
      setTodos(UpdatedTodos);
      setEditId(0);
      setTodo("");
    } else if (todo.trim() !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
    setTodo("");
    setEditId(0);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>

        <Todoform
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
         />
      </div>
    </div>
  );
};

export default App;
