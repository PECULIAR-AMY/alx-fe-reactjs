import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App () {
  return (
    <>
      <Route>
      <Route>
        <Route path="profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        {/* Add other routes here as needed */}
      </Route>
    </Route>
    </>
  )
}

export default App;
