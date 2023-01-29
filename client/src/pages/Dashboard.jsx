import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SnippetForm from "../components/SnippetForm";

function Dashboard() {
  const navigate = useNavigate();

  // Get the authenticated user from the state
  const { user } = useSelector((state) => state.auth);
  //Redirecet to login page if user not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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
