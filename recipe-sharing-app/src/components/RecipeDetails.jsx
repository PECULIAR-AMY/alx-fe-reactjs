// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore((state) =>
        state.recipes.find((recipe) => recipe.id === recipeId)
    );
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);
    const isFavorite = useRecipeStore(state => state.favorites.includes(recipeId));

    if (!recipe) {
        return <div className="text-center text-red-500">Recipe not found</div>;
    }

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipeId);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-5 shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-500">{recipe.title}</h1>
            <p className="text-gray-700 mb-6">{recipe.description}</p>
            <button
                onClick={handleFavoriteToggle}
                className={`mb-4 py-2 px-4 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'} hover:bg-opacity-75`}
            >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;
