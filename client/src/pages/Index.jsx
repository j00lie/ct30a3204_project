import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { reset, getSnippets } from "../features/snippets/snippetSlice";
import SnippetItem from "../components/SnippetThumbNail";

function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { snippets, isLoading, isError, message } = useSelector(
    (state) => state.snippet
  );

  //Go to post form if button clicked
  const onClick = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getSnippets());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Posted Questions</h1>
        <button onClick={onClick} className="btn btn-block">
          Ask A Question
        </button>
      </section>

      <section className="content">
        {snippets.length > 0 ? (
          <div className="snippets">
            {snippets.map((snippet) => (
              <SnippetItem key={snippet._id} snippet={snippet} />
            ))}
          </div>
        ) : (
          <h3>No Posts Yet..</h3>
        )}
      </section>
    </>
  );
}

export default Index;
