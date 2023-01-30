function Comment({ user, text, createdAt }) {
  return (
    <>
      <div className="comment">
        <div className="header">
          <span className="name">{user}</span>
          <span className="date">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="footer">
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}

export default Comment;
