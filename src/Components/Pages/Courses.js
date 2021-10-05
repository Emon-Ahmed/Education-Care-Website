import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Course from "../Body/Course";
import "./Pages.css";

export default function Courses() {
  const [course, setcourse] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setcourse(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="PageHeader">ALL COURSE</div>
        <div className="courses-area">
          {course.map((course) => (
            <Course key={course.key} course={course}></Course>
          ))}
        </div>
      </Container>
    </div>
  );
}
