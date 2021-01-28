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
               
                    <h3>Contact Me</h3>
                <hr/>
                    <h4>youremailgoeshere@email.com</h4>
                    <h4>000-000-0000</h4>
                    <hr/>
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
                        <Button id="send" type="submit">Send</Button>
                    </Form>
                    </Col>
                </Jumbotron>
                </Row>
            </Container>
        </>
    )
}

export default Contact;