import React, { useState } from "react";
import './index.css';

const AddCategory = ({ setCategories }) => {
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const checkValidation = () => {
    const valid = { name: false, description: false };
    if (newCategory.name.length === 0) {
      setNameError(true);
      valid.name = true;
    } else {
      setNameError(false);
      valid.name = false;
    }
    if (newCategory.description.length === 0) {
      setDescriptionError(true);
      valid.description = true;
    } else {
      setDescriptionError(false);
      valid.description = false;
    }
    return !(valid.name || valid.description);
  };

  return (
    <div className="add-category-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (checkValidation()) {
            fetch("https://northwind.vercel.app/api/categories/", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newCategory)
            })
              .then((res) => res.json())
              .then((data) => setCategories((categories) => [...categories, data]));
            setNewCategory({ name: "", description: "" });
          }
        }}
      >
        <div className="form-group">
          <input
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            type="text"
            placeholder="Enter Category Name"
            className={`form-input ${nameError ? 'error' : ''}`}
          />
          {nameError && <span className="error-message">Category name is required!</span>}
        </div>
        <div className="form-group">
          <input
            value={newCategory.description}
            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
            type="text"
            placeholder="Enter Description"
            className={`form-input ${descriptionError ? 'error' : ''}`}
          />
          {descriptionError && <span className="error-message">Description is required!</span>}
        </div>
        <button type="submit" className="submit-button">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
