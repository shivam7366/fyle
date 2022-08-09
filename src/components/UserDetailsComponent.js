import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function UserDetailsComponent() {
  const user = useSelector((state) => state.reducer.user);
  console.log(user);
  return (
    user && (
      <div className="container mt-4">
        <Card className="p-3">
          <Card.Title style={{ textAlign: "center" }}>
            <h4>User Details</h4>
          </Card.Title>

          <Row>
            <Col md="4" className="mr-5">
              <img src={user?.avatar_url} className="avatar" />
            </Col>

            <Col md="6" className="mt-5 ">
              <h4 className="text-info">{user?.name}</h4>
              <b>{user?.location}</b>
              <p>
                {user?.bio}
                <br />
                <a href={user?.html_url}>{user?.html_url}</a>
              </p>
            </Col>
          </Row>
        </Card>
      </div>
    )
  );
}

export default UserDetailsComponent;
