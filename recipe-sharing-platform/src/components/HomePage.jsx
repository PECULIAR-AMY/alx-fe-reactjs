import { useEffect, useState } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

export const HomePage = () => {
	const [recipes, setRecipes] = useState(data);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('data.json');
			const data = await response.json();
			setRecipes(data);
		};

		fetchData();
	}, []);
	return (
		<div className='container px-4 py-8 mx-auto '>
			<h1 className='mb-4 text-3xl font-bold'>Delicious Recipes</h1>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{recipes.map((recipe) => (
					<div
						key={recipe.id}
						className='overflow-hidden rounded-lg shadow-md'>
						<img
							src={recipe.image}
							alt={recipe.title}
							className='object-cover w-full h-48 hover:scale-110'
						/>
						<div className='p-4'>
							<h3 className='mb-2 text-lg font-medium'>
								{recipe.title}
							</h3>
							<p className='text-gray-700'>{recipe.summary}</p>
							<a
								href={`/recipes/${recipe.id}`}
								className='text-indigo-600 hover:text-indigo-800'>
								View Recipe
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;