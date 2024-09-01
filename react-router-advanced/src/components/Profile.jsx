import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import {  Route, Routes } from 'react-router-dom';

const Profile = () => {
	return (
		<>
			
				<Routes>
					<Route path='*' element={<ProfileDetails />} />
					<Route path='settings' element={<ProfileSettings />} />
				</Routes>
			
		</>
	);
};

export default Profile;