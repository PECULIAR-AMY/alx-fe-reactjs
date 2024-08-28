// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ ...recipe, title, description });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h2 className="text-xl font-bold mb-4">Edit Recipe</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 mb-4 border rounded text-black bg-slate-500"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-2 mb-4 border rounded text-black bg-slate-500"
            />
            <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
                Update Recipe
            </button>
        </form>
    );
};

export default EditRecipeForm;
