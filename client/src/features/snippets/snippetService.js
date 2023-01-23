import axios from "axios";

const API_URL = "/api/snippets/";

//Post a new code snippet along with the authentication token
const postSnippet = async (snippetData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, snippetData, config);
  return response.data;
};

const snippetService = {
  postSnippet,
};

export default snippetService;
