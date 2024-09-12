import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`data.json?id=${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-lg font-semibold text-gray-500">Loading...</div>;
  }

  return (
    <div className="container px-4 py-8 mx-auto max-w-4xl">
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 text-center">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="object-cover w-full h-72 mb-6 rounded-lg shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ingredients Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id} className="mb-1">{ingredient.name}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((instruction) => (
              <li key={instruction.id}>{instruction.step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
