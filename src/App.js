import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Header from "./components/layout/Header";
import UserDetailsComponent from "./components/UserDetailsComponent";
import RepoList from "./components/RepoList";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const loader = useSelector((state) => state.reducer.loader);
  const error = useSelector((state) => state.reducer.error);
  useEffect(() => {
    if (error) {
      return <div>No user</div>;
    }
  }, [error]);

  return (
    <div>
      <Header />
      {loader ? (
        <div style={{ textAlign: "center", marginTop: "40vh" }}>
          <Spinner size="xl" animation="grow" variant="info" />
        </div>
      ) : (
        <>
          {" "}
          <UserDetailsComponent />
          <RepoList />
        </>
      )}

      {/* <h1>Github Repos</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
