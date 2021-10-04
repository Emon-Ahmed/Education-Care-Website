import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BodyHeader from "./BodyHeader";
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
        <BodyHeader></BodyHeader>
        <div className="col">
          {service
            .map((service) => (
              <SingleService
                service={service}
                key={service.key}
              ></SingleService>
            ))
            .slice(0, 4)}
        </div>
      </Container>
    </div>
  );
}