import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSnippet } from "../features/snippets/snippetSlice";

function SnippetForm() {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [code, setCode] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postSnippet({ heading, text, code }));
    //clear the form after posting
    setHeading("");
    setText("");
    setCode("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            Give a descriptive heading to your problem here
          </label>

          <input
            type="text"
            name="heading"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Describe your problem here</label>

          <textarea
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Add relevant code snippet(s) here</label>
          <textarea
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Post Question
          </button>
        </div>
      </form>
    </section>
  );
}

export default SnippetForm;
