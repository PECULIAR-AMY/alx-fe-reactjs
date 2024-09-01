import './App.css';
import PostsComponent from './components/PostsComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<h1>React Query</h1>
			<PostsComponent />
		</QueryClientProvider>
	);
}

export default App;