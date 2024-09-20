import axios from "axios";

const BASE_URL = "https://api.github.com/users/{username}";

export const fetchUserData = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};







