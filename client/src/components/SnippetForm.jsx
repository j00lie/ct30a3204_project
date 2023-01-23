import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSnippet } from "../features/snippets/snippetSlice";

function SnippetForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postSnippet({ text }));
    //clear the form after posting
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Code Snippet</label>
          <pre>
            <code>
              <input
                type="text"
                name="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </code>
          </pre>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Post Code Snippet
          </button>
        </div>
      </form>
    </section>
  );
}

export default SnippetForm;
