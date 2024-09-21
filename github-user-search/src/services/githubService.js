// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

// Fetch GitHub user data
export const fetchUserData = async (username) => {
  const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

  
  const config = GITHUB_API_KEY
    ? { headers: { Authorization: `token ${GITHUB_API_KEY}` } }
    : {};

  try {
   
    const response = await axios.get(`${BASE_URL}/${username}`, config);
    return response.data;
  } catch (error) {
    throw new Error("Looks like we can't find the user.");
  }
};
