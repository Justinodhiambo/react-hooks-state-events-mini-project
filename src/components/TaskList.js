import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {
  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={() => onDeleteTask(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
