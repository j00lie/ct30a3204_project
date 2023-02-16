/*Component for listing all posted comments under the post */

import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div className="comment-box">
      {comments.map((comment) => (
        <div>
          <Comment key={comment.id} {...comment} />
        </div>
      ))}
    </div>
  );
}

export default CommentList;
