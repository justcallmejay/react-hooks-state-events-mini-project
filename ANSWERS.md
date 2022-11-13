# App

<!-- import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList"

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [formData, setFormData] = useState(TASKS)
  const [selectCategory, setSelectCategory] = useState("All")
  const [inputTask, setInputTask] = useState({
    text: "",
    category: ""
  })

  console.log(TASKS)
  

console.log(formData)

//Submit Tasks
function handleChange(event) {
  const { name, value } = event.target

  setInputTask((previousTasks) => ({
    ...previousTasks, [name]: value
  }));
}

function onTaskFormSubmit(event) {
  event.preventDefault()
  setInputTask({
    text: "",
    category: "",
  })
  setInputTask(inputTask)
  addTask(inputTask)
}

function addTask(newTask) {
  setFormData([...formData, newTask])
}

//Filter tasks
//Use formData.filter instead of TASKS.filter because it will update the object after onSumbit event; task is just from the data.js file and does not update data.js
const itemsToDisplay = formData.filter((tasks) => {
  if (selectCategory === "All") return true;
  else {
    return tasks.category === selectCategory;
}})

// function handleCategory(event) {
//   setSelectCategory(event.target.value)
//   console.log(event.target.value)
// }

function deleteTask(event) {
  const updateTask = formData.filter((task) => task !== event);
  setFormData(updateTask)
}

  return (
    <div className="App">
      <h2 key="h2">My tasks</h2>
      {/* {CATEGORIES.map((categories, i) =>  */}
      <CategoryFilter 
      setSelectCategory={setSelectCategory} 
      // categories={categories} 
      // i={i}
      // handleCategory={handleCategory} 
      />
      {/* )} */}
      <NewTaskForm categories={CATEGORIES} handleChange={handleChange} onTaskFormSubmit={onTaskFormSubmit}/>
      {itemsToDisplay.map((task, index) => {
      return <TaskList task={task} key={index} deleteTask={deleteTask}/>})}
    </div>
  );
}

export default App;

// const renderTask = TASKS.map(task => {
//     return task.text
//   })

// console.log(renderTask)

// {itemsToDisplay.map((task, i) => {
//   return <TaskList text={task.text} key={task.text} category={task.category} id={i} 
//   deleteTask={deleteTask}
//   /> -->

# CategoryFilter

<!-- import React, { useState } from "react";
import { CATEGORIES } from "../data"

function CategoryFilter({ setSelectCategory, categories, i }) {

  const [selected, setSelected] = useState('')
  // const renderClass = selected ? "selected" : ""
 console.log(selected)
//   function handleSelect(cat) {
//     if (categories === cat) {
//     setSelected((!selected))
//     }
//     else if (categories !== cat) {
//       setSelected(selected)
//     }
// }

  // function renderTwoFunctions(e, index) {
  //   setSelectCategory(e.target.value);
  //   setSelected(index);
  // }

  const filterCat = CATEGORIES.map((cat, index) => {
    return <button className={selected === index ? "selected" : "" } onClick={(e) => {setSelected(index); setSelectCategory(e.target.value)}} value={cat} key={index} id={index}>{cat}</button>
  })

  return (
    <span className="categories">
      <h5 key="category-filter">Category filters</h5> 
          {filterCat}
    </span>
  );
}

export default CategoryFilter; -->

# NewTaskForm

<!-- import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit, handleChange }) {

  const renderCategory = categories.map((cat, i) => {
    return <option key={i} value={cat}>{cat}</option>
  })

  

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
         {renderCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm; -->

# Task

<!-- import React from "react";

function Task ( { text, category, deleteTask } ) {

  // console.log({ category })

// function deleteTask(event) {
//   event.target.remove()
// }

  return (
    <div className="tasks">
      <div className="task" key="text">
          <div className="label" value={category}>{category}</div>
          <div className="text">{text}</div>
          <button className="delete" onClick={deleteTask}>X</button>
      </div>
    </div>
  );
}

export default Task; -->

# TaskList

<!-- import React from "react";
import Task from "./Task"

function TaskList( { task, deleteTask } ) {



  return (
        <Task 
          text={task.text} 
          category={task.category} 
          id={task.id} 
          deleteTask={() => {deleteTask(task);}}
        />
  );
}

{/* <div className="tasks">
<Task {...task} deleteTask={() => {deleteTask(task);}}/>
</div> */}

export default TaskList;

// {itemsToDisplay.map((tasks) => {
//   return (
//     <Task {...tasks} deleteTask={() => {deleteTask(tasks);}}/>
//   )
// })}

// function Task( { task } ) {
//   const renderTask = task.map(tasks => {
//   return <div className="text">{tasks.text}</div>
//   })

//   const renderCategory = task.map(tasks => {
//     return <div className="label">{tasks.category}</div>
//   })

//   return (
//     <div className="task">
//       <span>{renderCategory}{renderTask}</span>
//       <button className="delete">X</button>
//     </div>
//   );
// } -->