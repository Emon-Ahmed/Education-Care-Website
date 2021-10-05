import React from "react";
import { Container, Form } from "react-bootstrap";
import "./Pages.css";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="PageHeader">Contact</div>
        <div className="contact-area">
          <div className="contact-text">
            <h1>Contact Us</h1>
            <div className="contact-form">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <button className="btn">Send Message</button>
            </Form>
            </div>

          </div>
          <div className="contact-img">
            <img src="contact.jpg" alt="contact"></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
