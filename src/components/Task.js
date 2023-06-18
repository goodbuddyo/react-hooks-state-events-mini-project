import React from "react";

function Task({text,category}) {

  //function deleteTask(id) {
  //  const updatedTasks=tasks.filter(task => task.id!==id)
  //  setTasks(updatedTasks)
  //}


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" >X</button>
    </div>
  );
}
//onClick={() => deleteTask(task.id)}

export default Task;
