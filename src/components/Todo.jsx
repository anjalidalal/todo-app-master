import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleTodoInput = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleDeleteTodo = (id) => {
    const filteredData = todoList.filter((e) => e.id !== id);
    setTodoList(filteredData);
  };

  const handleChangeStatus = (id, title) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    console.log(id, title);
    setTodoList(updatedList);
  };

  return (
    <>
      <h1>Todo List App</h1>
      <h3>By Anjali Dalal</h3>
      <TodoInput handleTodoInput={handleTodoInput} />
      <TodoList
        list={todoList}
        handleDeleteTodo={handleDeleteTodo}
        handleChangeStatus={handleChangeStatus}
      />
      <button
        onClick={() => {
          const updatedList = todoList.filter((e) => !e.status);
          setTodoList(updatedList);
        }}
        className="showall"
      >
        Show All
      </button>
    </>
  );
};

export default Todo;
