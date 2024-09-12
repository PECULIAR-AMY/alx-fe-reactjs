import './App.css';
import { HomePage } from './components/HomePage';
import { RecipeDetail } from './components/RecipeDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/recipe/:id' element={<RecipeDetail />} />
				</Routes>
      <AddRecipeForm />
		</Router>
	);
}

export default App;