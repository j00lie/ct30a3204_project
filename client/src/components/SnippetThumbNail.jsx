function SnippetThumbNail({ snippet }) {
  const getItem = () => {};
  return (
    <div className="goal" onClick={getItem}>
      <div>{new Date(snippet.createdAt).toLocaleDateString()}</div>
      <h2>{snippet.text}</h2>
    </div>
  );
}

export default SnippetThumbNail;
