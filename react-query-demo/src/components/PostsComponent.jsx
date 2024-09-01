import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return response.json();
};

const PostsComponent = () => {
	const {
		isLoading,
		isError,
		data: posts,
		error,
	} = useQuery('posts', fetchPosts, {
		cacheTime: 1000, // Cache data for 1 second
		staleTime: Infinity, // Data remains stale until refetched
		refetchOnWindowFocus: true, // Refetch data when the window gains focus
		keepPreviousData: true, // Keep previous data while fetching new data
	});

	if (isLoading) return <div>Loading posts...</div>;
	if (isError) return <div>Error fetching posts: {error.message}</div>;

	return (
		<div>
			<h2>Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<button onClick={() => queryClient.invalidateQueries('posts')}>
				Refetch Posts
			</button>
		</div>
	);
};

export default PostsComponent;