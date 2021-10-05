import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Course from "../Body/Course";
import "./Pages.css";
import "../Body/Body.css";

export default function Courses() {

  // Calling JSON API - Showing ALL
  const [course, setcourse] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setcourse(data));
  }, []);
  return (
    <div>
      <Container>
        <div>
          <div className="PageHeader">ALL COURSE</div>
          <div className="course-inner-list">
            {course.map((course) => (
              <Course key={course.key} course={course}></Course>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}