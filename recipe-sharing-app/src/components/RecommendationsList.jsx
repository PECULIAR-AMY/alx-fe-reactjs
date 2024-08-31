// src/components/RecommendationsList.jsx
import { useRecipeStore } from '../components/recipeStore';

const RecommendationsList = () => {
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
    const recommendations = useRecipeStore(state => state.recommendations);

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-black">Recommended for You</h2>
            <button
                onClick={generateRecommendations}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
            >
                Refresh Recommendations
            </button>
            {recommendations.length === 0 ? (
                <p className="text-gray-500">No recommendations available.</p>
            ) : (
                recommendations.map(recipe => (
                    <div key={recipe.id} className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h3 className="text-lg font-semibold">{recipe.title}</h3>
                        <p className="text-gray-700">{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;
