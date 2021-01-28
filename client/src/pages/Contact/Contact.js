import React from "react";
import { Form, Button, Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import "./Contact.css";


function Contact() {

    return (
        <>
        <br/>

            <Container> 
                <Row>
                    <Col>
                    <Image src="/images/566D3108-7EF6-472E-AA0D-71E030C50339.JPG" alt="Hannah Ryen" className="contactPics"></Image>
                    </Col>
                <Jumbotron className="contactForm">
                    <Col>
               
                    <h4>Contact Me</h4>
                    <br/>
                    <Form>
                        <Form.Group controlId="name">
                            
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="subject">
                            
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group controlId="message">
                        
                        <Form.Control as="textarea" placeholder="Message" rows={5} />
                        </Form.Group>
                    </Form>
                    </Col>
                </Jumbotron>
                </Row>
            </Container>
        </>
    )
}

export default Contact;