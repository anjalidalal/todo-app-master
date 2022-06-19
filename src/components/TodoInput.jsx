import React, { useState } from "react";
import { nanoid } from "nanoid";

const TodoInput = ({ handleTodoInput }) => {
  const [text, setText] = useState("");

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleAddInput = () => {
    const data = {
      title: text,
      status: false,
      id: nanoid(4),
    };
    handleTodoInput(data);
    setText("");
  };

  return (
    <div className="header">
      <input
        type="text"
        value={text}
        className="input"
        placeholder="Enter task"
        onChange={handleChangeInput}
      />
      <button onClick={handleAddInput} className="btn">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
