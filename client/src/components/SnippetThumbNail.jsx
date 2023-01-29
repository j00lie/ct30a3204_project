import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SnippetThumbNail({ snippet }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getItem = (snippet) => {
    console.log(snippet);
    dispatch(dispatch({ type: "SET_SELECTED_ITEM", payload: snippet }));
    navigate("/snippet");
  };
  return (
    <div className="goal" onClick={() => getItem(snippet)}>
      <div>{new Date(snippet.createdAt).toLocaleDateString()}</div>
      <h2>{snippet.text}</h2>
    </div>
  );
}

export default SnippetThumbNail;
