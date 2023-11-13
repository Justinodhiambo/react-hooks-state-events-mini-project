import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask();
  };

  return (
    <div className="task">
      <p>
        <strong>Task:</strong> {task.text} - <strong>Category:</strong> {task.category}
      </p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Task;
