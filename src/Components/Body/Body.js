import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "./SingleService";


export default function Body() {
  const [service, setservice] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);
  return (
    <div>
      <Container>
        {service.map((service) => (
          <SingleService service={service}></SingleService>
        )).slice(0, 4)}

      </Container>
    </div>
  );
}