import React, { useState } from 'react'
import { Axios, db } from '../../firebase/firebaseConfig'
import { Form, Button, Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import "./Contact.css";
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    // toast
    const notify = () => toast(`Thank you ${formData.name}. Your email has been sent!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toastyContainer",
    });


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

            }).then(() => notify())
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <ToastContainer className="toastyContainer"/>
            
            <br/>


           

            <Container className="contactSetUp1">
                <Row>
                    <Col>
                        <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/566D3108-7EF6-472E-AA0D-71E030C50339.JPG?raw=true" alt="Hannah Ryen" className="contactPics"></Image>
                    </Col>
                    <Jumbotron className="contactForm">
                        <Col>

                            <h3>Contact Me</h3>
                            <hr />
                            <h4>hannahryenn@gmail</h4>
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
                                <Button id="send" type="submit" block disabled={!(formData.name && formData.email && formData.message)}>Send</Button>
                            </Form>
                        </Col>
                    </Jumbotron>
                </Row>
            </Container>

            <Container className="contactSetUp2">
                <Row>
                    <Col>
                        <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/566D3108-7EF6-472E-AA0D-71E030C50339.JPG?raw=true" alt="Hannah Ryen" className="contactPics"></Image>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Jumbotron className="contactForm">
                        <Col>

                            <h3>Contact Me</h3>
                            <hr />
                            <h4>hannahryenn@gmail</h4>
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