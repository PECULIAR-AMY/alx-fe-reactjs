import React, { useContext } from 'react';
import  UserContext  from './UserContext';

const UserDetails = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>Name: {userData.name}</h2>
      <p>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>
    </div>
  );
};

export default UserDetails;
