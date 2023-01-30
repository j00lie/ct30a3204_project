import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { reset, getComments } from "../features/comments/commentSlice";

function SnippetPage() {
  //Get clicked post from global state
  const selectedItem = useSelector((state) => state.clickedItem.selectedItem);

  const dispatch = useDispatch();

  const { comments, isLoading, isError, message } = useSelector(
    (state) => state.comment
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    //Get comments with current posts ID
    dispatch(getComments(selectedItem._id));

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  return (
    <div className="page-container">
      <div className="post-container">
        <h1 className="post-heading">
          {" "}
          {selectedItem ? selectedItem.header : "None"}
        </h1>
        <p>
          Asked: {new Date(selectedItem.createdAt).toLocaleDateString()} By:{" "}
          {selectedItem.user}
        </p>
        <p className="post-text">{selectedItem.text}</p>
        <pre className="post-code">
          <code>{selectedItem.code}</code>
        </pre>
      </div>

      <CommentForm />
      <h2 className="post-heading">Comments</h2>
      <section className="content">
        {comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <h3>No Comments Yet..</h3>
        )}
      </section>
    </div>
  );
}

export default SnippetPage;
