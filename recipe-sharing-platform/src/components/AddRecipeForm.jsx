import React, { useState } from 'react';

const AddRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    }
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n'), // Convert ingredients to array
        steps: steps.split('\n') // Convert steps to array
      };

      onSubmit(newRecipe);
      setTitle(''); // Clear the input fields
      setIngredients('');
      setSteps('');
      setErrors({}); // Clear error messages
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.ingredients ? 'border-red-500' : 'border-gray-300'
          }`}
          rows="5"
          placeholder="Enter each ingredient on a new line"
          required
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="steps">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.steps ? 'border-red-500' : 'border-gray-300'
          }`}
          rows="5"
          placeholder="Enter each step on a new line"
          required
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
