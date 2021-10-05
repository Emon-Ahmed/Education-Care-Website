import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Body.css";

const Course = (props) => {
  const { name, des, photo, price } = props.course;
  return (
    <div>
      <Card className="course">
        <Card.Img className="card-img" src={photo} />
        <Card.Body>
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <Card.Text>{des}</Card.Text>
          <h5>Price: ${price}</h5>
          <Link to="/details">
            <Button className="btn">Course Details</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
