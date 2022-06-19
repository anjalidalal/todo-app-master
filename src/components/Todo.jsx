import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleTodoInput = (todo) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <TodoInput handleTodoInput={handleTodoInput} />
      <TodoList list={todoList} />
    </>
  );
};

export default Todo;
