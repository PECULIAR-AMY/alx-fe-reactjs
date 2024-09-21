// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle form submission and API call
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Search form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-lg">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search GitHub Username"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Display loading, error, and results */}
      {isLoading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-center text-lg font-semibold mb-2">{userData.login}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="block text-center text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
