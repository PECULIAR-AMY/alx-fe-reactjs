// src/components/FavoritesList.jsx
import { useRecipeStore } from '../recipeStore';

const FavoritesList = () => {
    const favorites = useRecipeStore(state => state.favorites.map(id =>
        state.recipes.find(recipe => recipe.id === id)
    ));

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-black">My Favorites</h2>
            {favorites.length === 0 ? (
                <p className="text-gray-500">No favorite recipes yet.</p>
            ) : (
                favorites.map(recipe => (
                    <div key={recipe.id} className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h3 className="text-lg font-semibold text-gray-500">{recipe.title}</h3>
                        <p className="text-gray-700">{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;
