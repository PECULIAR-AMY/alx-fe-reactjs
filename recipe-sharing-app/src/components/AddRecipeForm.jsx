// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Ensure title and description are not empty
        if (!title.trim() || !description.trim()) {
            alert("Title and description cannot be empty.");
            return;
        }

        addRecipe({ id: Date.now(), title, description });
        setTitle('');  // Clear the input fields after submission
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-5 bg-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Add a New Recipe</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 mb-4 border rounded bg-gray-500"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-2 mb-4 border rounded bg-gray-500"
            />
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
