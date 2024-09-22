import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target; // Correctly accessing name and value
    // Ensure it's only for inputs with name attributes defined
    if (name === "searchTerm") {
      setSearchTerm(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "minRepos") {
      setMinRepos(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      setError("Please enter a username");
      return;
    }
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetchUserData(searchTerm, location, minRepos);
      setUserData(response.items || []); // Assuming response structure
      if (response.items.length === 0) {
        setError("Looks like we can't find the user.");
      }
    } catch (error) {
      setError("Error fetching user data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* searchTerm input */}
        <input
          name="searchTerm"
          type="text"
          value={searchTerm}
          onChange={handleChange} // Attach handleChange only to inputs
          placeholder="Search GitHub Username"
          className="border p-2 rounded"
        />

        {/* location input */}
        <input
          name="location"
          type="text"
          value={location}
          onChange={handleChange} // Attach handleChange only to inputs
          placeholder="Location (optional)"
          className="border p-2 rounded"
        />

        {/* minRepos input */}
        <input
          name="minRepos"
          type="number"
          value={minRepos}
          onChange={handleChange} // Attach handleChange only to inputs
          placeholder="Minimum Repositories (optional)"
          className="border p-2 rounded"
        />

        {/* Submit button */}
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Display a message when no users are found */}
      {!isLoading && userData.length === 0 && !error && (
        <p className="text-red-500">Looks like we can't find the user.</p>
      )}
      
      <div className="mt-4">
        {/* User data display */}
        {userData.map((user) => (
          <div key={user.id} className="border p-4 rounded mb-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="rounded-full w-16 h-16"
            />
            <p className="font-bold">{user.login}</p>
            <p>Location: {user.location || "N/A"}</p>
            <p>Repos: {user.public_repos}</p>
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
