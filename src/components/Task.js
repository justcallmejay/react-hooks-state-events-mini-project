import React from "react";

function Task( { text, category, task, i, handleDelete } ) {

  return (
    <div className="task" key={i}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(task)}>X</button>
    </div>
  );
}

export default Task;