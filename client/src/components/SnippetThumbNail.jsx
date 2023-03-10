/*Component for showing all the posted code snippets on the index page */

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SnippetThumbNail({ snippet }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getItem = (snippet) => {
    //console.log(snippet);

    dispatch(dispatch({ type: "SET_SELECTED_ITEM", payload: snippet }));
    navigate("/snippet");
  };
  return (
    <div
      className="snippet"
      onClick={() => getItem(snippet)}
      style={{ cursor: "pointer" }}
    >
      <div>{new Date(snippet.createdAt).toLocaleDateString()}</div>
      <h2>{snippet.header}</h2>
    </div>
  );
}

export default SnippetThumbNail;
