// src/components/Search.jsx
import { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService'; // Advanced search function

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchAdvancedUserData(searchTerm, location, minRepos);  // Pass new params
      setUserData(data.items);  // Store array of users for advanced search
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-lg">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub Username"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Display results, loading state, or error */}
      {isLoading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && userData.length > 0 && (
        <div className="w-full max-w-lg">
          {userData.map((user) => (
            <div key={user.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold mb-2">{user.login}</p>
              <p className="text-center">Location: {user.location || 'N/A'}</p>
              <p className="text-center">Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer noopener"
                className="block text-center text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
