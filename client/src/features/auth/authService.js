// Make http requests and set data in local storage here

import axios from "axios";

const API_URL = "/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  //User returned as a full user object from register, hence the .token
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
  }
  return response.data.token;
};
//Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Log out
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
