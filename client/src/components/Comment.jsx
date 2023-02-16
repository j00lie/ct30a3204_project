/*Component for a single comment */

function Comment({ user, text, createdAt }) {
  return (
    <>
      <div className="comment">
        <div className="comment-header">
          <span className="name">{user}</span>
          <span className="date">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>

        <div>
          <p className="comment-text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Comment;
