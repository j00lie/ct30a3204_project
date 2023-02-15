import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../features/comments/commentSlice";

function CommentForm() {
  //Get selected post from global state
  const postId = useSelector((state) => state.clickedItem.selectedItem._id);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(postId);
    dispatch(postComment({ postId, text }));
    //clear the form after posting

    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            placeholder="Type Comment"
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    </section>
  );
}

export default CommentForm;
