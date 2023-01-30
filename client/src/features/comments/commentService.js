import axios from "axios";

const API_URL = "/api/comments/";

//Post a new comment along with the authentication token
const postComment = async (commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, commentData, config);
  return response.data;
};
//Get all posts
const getComments = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const commentService = {
  postComment,
  getComments,
};

export default commentService;
