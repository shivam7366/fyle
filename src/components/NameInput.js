import React, { useState } from "react";
import { InputGroup, Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getData, setLoader } from "../actions";

function NameInput() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userName);
    dispatch(setLoader(true));
    dispatch(getData(userName));
    setUserName("");
  };
  return (
    <Col md="4">
      <Form className="mt-3" onSubmit={formSubmitHandler}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="username"
            aria-label="username"
            aria-describedby="basic-addon2"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
          <Button variant="info" id="button-addon2" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>
    </Col>
  );
}

export default NameInput;
