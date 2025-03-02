import React from "react";
import Task from "./Task"; // Importing the Task component

function TaskList({ tasks, onDeleteTask }) {
  // The Task component is now imported
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} category={task.category} onDelete={() => onDeleteTask(task.id)} />
        // Ensure each task has a unique key prop
        // Ensure each task has a unique key prop
      ))}
    </div>
  );
}

export default TaskList;
