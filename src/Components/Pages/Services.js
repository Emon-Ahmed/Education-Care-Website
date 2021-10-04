import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../Body/SingleService";

export default function Services() {
  const [service, setservice, key] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);
  return (
    <div>
      <Container>
      <Row>
        {service.map((service) => (
          <SingleService key={key} service={service}></SingleService>
        ))}
      </Row>
      </Container>
    </div>
  );
}