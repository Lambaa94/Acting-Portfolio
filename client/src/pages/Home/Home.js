import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./Home.css";



function Home() {

    return (

        <>
            <br />
            <Container>
                <Row>
                    <Col>
                        <Image src="/images/img_4368.jpeg" alt="Hannah Ryen" id="homePic"></Image>

                    </Col>
                    <Col>
                        <Row>
                            <Button id="contactMe">Contact Me</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>

    );

}

export default Home;