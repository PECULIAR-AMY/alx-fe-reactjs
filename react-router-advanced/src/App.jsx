import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostDetails from './components/BlogPostDetails';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/profile'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route path="/blog/:id" element={<BlogPostDetails />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;