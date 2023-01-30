import { useSelector } from "react-redux";

function SnippetPage() {
  //Get clicked post from global state
  const selectedItem = useSelector((state) => state.clickedItem.selectedItem);

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
      <h2 className="post-heading">Comments</h2>
    </div>
  );
}

export default SnippetPage;
