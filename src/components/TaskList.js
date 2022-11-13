import React from "react";
import Task from "./Task";

function TaskList( { setTask, filterCategory, handleDelete } ) {

  const [task, category, text] = filterCategory

  return (
    <div className="tasks">
      {filterCategory.map((task, i) => 
      <Task {...task} key={i} task={task} setTask={setTask} handleDelete={handleDelete}/>)}
    </div>
  );
}

export default TaskList;