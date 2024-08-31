import  { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
	const userData = useContext(UserContext);

	if (!userData) {
		return <div>No user data available</div>;
	}

	return (
		<div
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<h2>{userData.name}</h2>
			<p>Email: {userData.email}</p>
		</div>
	);
}

export default UserProfile;