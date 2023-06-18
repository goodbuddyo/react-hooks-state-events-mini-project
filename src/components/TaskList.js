import React from "react";
import Task from "./Task";

function TaskList({tasks,categiries}) {


  const tasksToDisplay=tasks
    .filter((task) => {
      if(task.text) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <div className="tasks">

      <div className="Tasks">
        {tasksToDisplay.map((task) => (
          <Task key={task.text} text={task.text} category={task.category} />
          // will need to create id
        ))}
      </div>
    </div>
  );
}

export default TaskList;
