import React, { useState } from "react";

function NewTaskForm( { onTaskFormSubmit, CATEGORIES } ) {

  const [newTask, setNewTask] = useState({
    text: "",
    category: ""
  })


  function handleChange(e) {
    const { name, value } = e.target

    setNewTask((previousTasks) => {
      return {
        ...previousTasks,
        [name] : value
    }
  })
}

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Code">Code</option>
            <option value="Food">Food</option>
            <option value="Money">Money</option>
            <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;