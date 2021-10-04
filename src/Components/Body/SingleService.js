import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Body.css";

const SingleService = (props) => {
  const { name, designation, photo } = props.service;
  return (
    <div className="col">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{designation}</Card.Text>
          <Button className="link" variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
