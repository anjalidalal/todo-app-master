import React from "react";

const TodoList = ({ list }) => {
  return (
    <>
      {list.map((e) => (
        <div className="todo">
          <input type="checkbox" />
          <label>{e.title}</label>
        </div>
      ))}
    </>
  );
};

export default TodoList;
