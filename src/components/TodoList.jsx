import React from "react";
import logo from "./logo.png";

const TodoList = ({ list, handleDeleteTodo, handleChangeStatus }) => {
  return (
    <>
      {list.map((e) => (
        <div className="todo" key={e.id}>
          <div>
            <input
              type="checkbox"
              className="check"
              onClick={() => {
                handleChangeStatus(e.id, e.title);
              }}
            />
            <label className={e.status ? "strike" : ""}>{e.title}</label>
          </div>
          <button
            className="logo"
            onClick={() => {
              handleDeleteTodo(e.id);
            }}
          >
            <img src={logo} className="icon" />
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
