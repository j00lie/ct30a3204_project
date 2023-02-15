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

        <div className="comment-text">
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}

export default Comment;
