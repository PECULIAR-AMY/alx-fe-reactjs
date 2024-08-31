// src/components/RecipeList.jsx
import { useRecipeStore } from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-black">Recipe List</h2>
            {filteredRecipes.length === 0 ? (
                <p className="text-gray-500">No recipes match your search criteria.</p>
            ) : (
                filteredRecipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white shadow-md rounded-md p-4 mb-4"
                    >
                        <h3 className="text-lg font-semibold text-black">{recipe.title}</h3>
                        <p className="text-gray-700">{recipe.description}</p>
                        <Link to={`/recipe/${recipe.id}`}>
                            <button className="mt-3 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
