import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Body/Course";
import "./Pages.css";

export default function Courses() {
  const [course, setcourse, key] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setcourse(data));
  }, []);
  return (
    <div className="center">
      <Container>
        <div className="PageHeader">All Course</div>
        <div className="courses-area">
          {course.map((course) => (
            <Course key={key} course={course}></Course>
          ))}
        </div>
      </Container>
    </div>
  );
}
