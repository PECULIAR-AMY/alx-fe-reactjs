import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Correctly import the API service

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle input changes for the form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "searchTerm") setSearchTerm(value);
    if (name === "location") setLocation(value);
    if (name === "minRepos") setMinRepos(value);
  };

  // Function to handle form submission and API call
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate if searchTerm is provided
    if (!searchTerm.trim()) {
      setError("Please enter a username");
      return;
    }

    // Start loading
    setIsLoading(true);
    setError(null);

    try {
      // Make the API request to fetch user data
      const response = await fetchUserData(searchTerm, location, minRepos);

      // Handle case when no users are found
      if (response && response.items && response.items.length > 0) {
        setUserData(response.items); // Set user data from the API
        setError(null); // Clear any previous error
      } else {
        setUserData([]); // Clear user data if no users are found
        setError("Looks like we can't find the user."); // Display correct message
      }
    } catch (error) {
      // Handle API errors
      setError("Error fetching user data. Please try again.");
    } finally {
      // Stop loading after request is finished
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Form for user input */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          name="searchTerm"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search GitHub Username"
          className="border p-2 rounded"
        />
        <input
          name="location"
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Location (optional)"
          className="border p-2 rounded"
        />
        <input
          name="minRepos"
          type="number"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum Repositories (optional)"
          className="border p-2 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {/* Display loading state */}
      {isLoading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* If there's no error, no loading, and no users found, show this message */}
      {!isLoading && !error && userData.length === 0 && (
        <p className="text-red-500">Looks like we can't find the user.</p>
      )}

      {/* Display user data if available */}
      <div className="mt-4">
        {userData.map((user) => (
          <div key={user.id} className="border p-4 rounded mb-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="rounded-full w-16 h-16"
            />
            <p className="font-bold">{user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
