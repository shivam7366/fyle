import { Row, Col, Card } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

function RepoList() {
  const repos = useSelector((state) => state.reducer.repos);
  console.log(repos);

  return (
    repos.length && (
      <div>
        <h1 style={{ textAlign: "center" }} className="mt-4">
          Github Repos
        </h1>
        <ul className="container">
          <Row className="d-flex flex-row flex-wrap justify-content-between">
            {repos.map((repo) => (
              <>
                <Col md="6" className="mt-4">
                  <li key={repo.id}>
                    <Card>
                      <Card.Body>
                        <a href={repo.html_url} className="repo_url">
                          {repo.name}
                        </a>
                        <p>
                          <b>{repo?.description}</b>
                        </p>
                        <div className="d-flex flex-row flex-wrap   ">
                          {repo?.topics?.map((tag) => (
                            <p className="repo_tags">
                              <i>{tag}</i>{" "}
                            </p>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </li>
                </Col>
              </>
            ))}
          </Row>
        </ul>
        <Pagination />
      </div>
    )
  );
}

export default RepoList;
