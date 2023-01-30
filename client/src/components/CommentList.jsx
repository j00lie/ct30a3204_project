import Comment from "./Comment";

function CommentList({ comments }) {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment {...comment} />
    </div>
  ));
}

export default CommentList;
