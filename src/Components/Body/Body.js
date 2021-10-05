import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BodyHeader from "./BodyHeader";
import Course from "./Course";
import "./Body.css";

export default function Body() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div>
      <Container>
        <BodyHeader></BodyHeader>
        <div className="course-show">
          <div className="course-name">Course Name</div>
          <div className="course-list">
            {course
              .map((course) => (
                <Course key={course.key} course={course}></Course>
              ))
              .slice(4, 9)}
          </div>
        </div>
        <div className="quotes">
          “Science is about knowing, engineering is about doing”
        </div>
      </Container>
    </div>
  );
}
