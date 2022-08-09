import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../actions";

function Pagination() {
  const repos = useSelector((state) => state.reducer.repos) || [];
  const user = useSelector((state) => state.reducer.user);
  const username = user?.login;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const prevHandler = () => {
    setPage(page - 1);
    dispatch(getData(username, page));
  };
  const nextHandler = () => {
    setPage(page + 1);
    dispatch(getData(username, page));
  };
  return (
    <Row>
      <Col md="4"></Col>
      <Col md="2" className="mt-4">
        <Button
          onClick={prevHandler}
          variant="btn btn-info"
          disable={repos.length > 0 && repos.length < 10}
        >
          Previous
        </Button>
      </Col>
      <Col md="2" className="mt-4">
        <Button
          onClick={nextHandler}
          variant="btn btn-info"
          disable={page === 1}
        >
          Next
        </Button>
      </Col>
    </Row>
  );
}

export default Pagination;
