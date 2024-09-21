export const fetchUserData = async (username, location = "", minRepos = "") => {
    const queryParts = [`${username}`];
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
  
    const query = queryParts.join(" ");
    const response = await fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
    );
  
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    return await response.json();
  };