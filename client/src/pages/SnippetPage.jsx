import { useSelector } from "react-redux";

function SnippetPage() {
  const selectedItem = useSelector((state) => state.clickedItem.selectedItem);
  return (
    <div>
      <p>Selected Item: {selectedItem ? selectedItem.text : "None"}</p>
    </div>
  );
}

export default SnippetPage;
