import axios from "axios";

export const fetchUserData = async (username, location = "", minRepos = "") => {
  const queryParts = [`${username}`];
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);
  
  const query = queryParts.join(" ");
  
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data; // Return the data from the response
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};
