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
		return <div>Loading...</div>;
	}

    return (
			<div className='container px-4 py-8 mx-auto'>
				<h1 className='mb-4 text-3xl font-bold'>{recipe.title}</h1>
				<img
					src={recipe.image}
					alt={recipe.title}
					className='object-cover w-full h-64 mb-4'
				/>
				<div className='mb-4'>
					<h2 className='mb-2 text-2xl font-medium'>Ingredients</h2>
					<ul>
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient.id}>{ingredient.name}</li>
						))}
					</ul>
				</div>
				<div className='mb-4'>
					<h2 className='mb-2 text-2xl font-medium'>Instructions</h2>
					<ol>
						{recipe.instructions.map((instruction) => (
							<li key={instruction.id}>{instruction.step}</li>
						))}
					</ol>
				</div>
			</div>
		);
};

export default RecipeDetail;