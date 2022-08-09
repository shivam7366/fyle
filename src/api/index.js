import axios from "axios";
const url = "https://api.github.com/users";

export const getUser = async (username) => {
  const response = await axios.get(`${url}/${username}`);
  return response.data;
};
export const getRepos = async (username, page) => {
  const response = await axios.get(
    `${url}/${username}/repos?per_page=10&page=${page}`
  );
  return response.data;
};
