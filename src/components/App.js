import React,{useState,useEffect} from "react";
// useEffect,
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import {CATEGORIES,TASKS} from "../data";

import {v4 as uuid} from "uuid";


console.log("Here's the data you're working with");
console.log({CATEGORIES,TASKS});

function App() {
  const [tasks,setTasks]=useState(TASKS);
  const [categories,setCategories]=useState(CATEGORIES);



  useEffect(() => {
    tasks.map(task => {
      if(!task.id) {
        return {
          ...task,
          id: uuid()
        }
      } else {return {task}}
    })
    setTasks(tasks)
  },[])


  function updateTask(tasks) {


  }



  function doSetTask(data) {
    setTasks(data)
  }
  function doSetCategories(data) {
    setCategories(data)
  }



  if(false==true) {
    setCategories(...categories,null)
    setTasks(tasks,...null)
  } // stop non use warning

  // uuid to create id help from 
  // stackoverflow.com/questions/70238309/how-to-add-unique-key-using-uuid-in-react-j

  //  console.log({tasks})
  //},[]);

  // timmousk.com/blog/react-hook-useeffect-has-a-missing-dependency/



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm onDoSetTask={doSetTask} onDoSetCategories={doSetCategories} />
      <TaskList tasks={tasks} categories={categories} onUpdateTask={updateTask} />
    </div>
  );
}

export default App;
