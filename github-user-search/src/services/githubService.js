import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  const baseURL = `https://api.github.com/search/users`;

  // Build query dynamically
  let query = `q=${username}`;
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${baseURL}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

