import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryFilter }) {
  const handleCategoryClick = (category) => {
    onCategoryFilter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
