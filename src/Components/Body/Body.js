import "./Body.css";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BodyHeader from "./BodyHeader";
import Course from "./Course";

export default function Body() {

  // Calling JSON API - Showing Only 4
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
            {course.map((course) => (
                <Course key={course.key} course={course}></Course>
              )).slice(4, 9)}
          </div>
        </div>
        <div className="quotes">
          <div className="quotes-text">
            “Science is about knowing, engineering is about doing”
          </div>
          <Link to="/courses"><button className="quotes-btn">View All Course</button></Link>
        </div>
      </Container>
    </div>
  );
}