// src/App.jsx
import { Routes, Route, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-center text-4xl font-bold mb-10 text-black">Recipe Sharing App</h1>
      <SearchBar />
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
