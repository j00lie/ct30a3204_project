import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SnippetForm from "../components/SnippetForm";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { reset } from "../features/snippets/snippetSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the authenticated user from the state
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const postState = useSelector((state) => state.snippet);

  //Redirecet to login page if user not authenticated
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    // Toast error message if all fields are not filled in the post
    if (postState.isError) {
      toast.error(postState.message);
    }
    dispatch(reset());
  }, [user, navigate, isError, message, postState, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome</h1>
        <p>Post Your Own Question Here</p>
      </section>

      <SnippetForm />
    </>
  );
}

export default Dashboard;
