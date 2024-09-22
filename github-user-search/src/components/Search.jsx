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
    const { name, value } = event.target;
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
      if (response.items && response.items.length > 0) {
        setUserData(response.items);
      } else {
        setUserData([]);
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
          onChange={handleChange}
          placeholder="Search GitHub Username"
          className="border p-2 rounded"
        />

        {/* location input */}
        <input
          name="location"
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Location (optional)"
          className="border p-2 rounded"
        />

        {/* minRepos input */}
        <input
          name="minRepos"
          type="number"
          value={minRepos}
          onChange={handleChange}
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

      {/* Only display users when there is no error and not loading */}
      {!isLoading && !error && userData.length > 0 && (
        <div className="mt-4">
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
      )}
    </div>
  );
};

export default Search;
