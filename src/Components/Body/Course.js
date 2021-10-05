import React from "react";
import { Card } from "react-bootstrap";
import "./Body.css";

const Course = (props) => {
  // Destructuring Course
  const { name, description, photo, price } = props.course;

  return (
    <div>
      <Card className="course">
        <Card.Img className="card-img" src={photo} />
        <Card.Body>
          <Card.Title><b>{name}</b></Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>Price: ${price}</h5>
          <a className="btn">Course Details</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;