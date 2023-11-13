import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text,
      category,
      id: Date.now(),
    };

    onTaskFormSubmit(newTask);

    setText("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Details"
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
        >
          {categories.map((cat) => (
            cat !== "All" && (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
