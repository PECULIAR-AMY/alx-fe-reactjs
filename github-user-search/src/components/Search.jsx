import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Ensure this service is properly imported

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form inputs correctly by accessing event.target.value only from inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "searchTerm":
        setSearchTerm(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "minRepos":
        setMinRepos(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission and API request
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      setError("Please enter a username");
      return;
    }

    setIsLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await fetchUserData(searchTerm, location, minRepos);

      if (response && response.items && response.items.length > 0) {
        setUserData(response.items);
        setError(null); // Clear the error if users are found
      } else {
        setUserData([]); // Empty user data if no users are found
        setError(["Looks like we can't find the user."]); // Correct error message
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
        <input
          name="searchTerm"
          type="text"
          value={searchTerm}
          onChange={handleInputChange} // Correctly handle input changes
          placeholder="Search GitHub Username"
          className="border p-2 rounded"
        />

        <input
          name="location"
          type="text"
          value={location}
          onChange={handleInputChange} // Correctly handle input changes
          placeholder="Location (optional)"
          className="border p-2 rounded"
        />

        <input
          name="minRepos"
          type="number"
          value={minRepos}
          onChange={handleInputChange} // Correctly handle input changes
          placeholder="Minimum Repositories (optional)"
          className="border p-2 rounded"
        />

        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      
      {/* Display error message when there's an error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* If there's no error, no loading, and no users found, show this message */}
      {!isLoading && !error && userData.length === 0 && (
        <p className="text-red-500">Looks like we can't find the user.</p>
      )}

      {/* Display user data if users are found */}
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
