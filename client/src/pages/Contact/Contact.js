import React, { useState } from 'react'
import { Axios, db } from '../../firebase/firebaseConfig'
import { Form, Button, Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import "./Contact.css";


function Contact() {


    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-acting-portfolio-ef828.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
              
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
        
            <br />
        
            <Container className="contactSetUp1">
                <Row>
                    <Col>
                        <Image src="/images/566D3108-7EF6-472E-AA0D-71E030C50339.JPG" alt="Hannah Ryen" className="contactPics"></Image>
                    </Col>
                    <Jumbotron className="contactForm">
                        <Col>

                            <h3>Contact Me</h3>
                            <hr />
                            <h4>youremailgoeshere@email.com</h4>
                            <h4>000-000-0000</h4>
                            <hr />
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">

                                    <Form.Control type="text" name="name" placeholder="Name" onChange={updateInput}
                                        value={formData.name || ''} />
                                </Form.Group>
                                <Form.Group controlId="email">

                                    <Form.Control type="email" name="email" placeholder="Email" onChange={updateInput}
                                        value={formData.email || ''} />
                                </Form.Group>
                                <Form.Group controlId="message">

                                    <Form.Control as="textarea" name="message" placeholder="Message" rows={5} onChange={updateInput}
                                        value={formData.message || ''} />
                                </Form.Group>
                                <Button id="send" type="submit">Send</Button>
                            </Form>
                        </Col>
                    </Jumbotron>
                </Row>
            </Container>

            <Container className="contactSetUp2">
                <Row>
                    <Col>
                        <Image src="/images/566D3108-7EF6-472E-AA0D-71E030C50339.JPG" alt="Hannah Ryen" className="contactPics"></Image>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Jumbotron className="contactForm">
                        <Col>

                            <h3>Contact Me</h3>
                            <hr />
                            <p>hannahryenn@gmail</p>
                            <h4>609-709-6536</h4>
                            <hr />
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">

                                    <Form.Control type="text" name="name" placeholder="Name" onChange={updateInput}
                                        value={formData.name || ''} />
                                </Form.Group>
                                <Form.Group controlId="email">

                                    <Form.Control type="email" name="email" placeholder="Email" onChange={updateInput}
                                        value={formData.email || ''} />
                                </Form.Group>
                                <Form.Group controlId="message">

                                    <Form.Control as="textarea" name="message" placeholder="Message" rows={5} onChange={updateInput}
                                        value={formData.message || ''} />
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