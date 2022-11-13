import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [task, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const filterCategory = task.filter(tas => {
    if (category === "All") return true;
    
  return tas.category === category})

  function onTaskFormSubmit(newTask) {
    return setTask(task => {
      return [...task, newTask]})
  }

  function handleDelete(tash) {
    console.log(tash)
    const deleteTask = task.filter(tas => tas.text !== tash.text)
    setTask(deleteTask)
  }


  return (

    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} setCategory={setCategory} category={category}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} CATEGORIES={CATEGORIES}/>
      <TaskList filterCategory={filterCategory} setTask={setTask} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;