import { useParams } from 'react-router-dom';

const BlogPostDetails = () => {
     const { postId } = useParams();
	return <div>BlogPostDetails</div>;
};

export default BlogPostDetails;