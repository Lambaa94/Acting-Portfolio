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
                        <h3>Recent Roles</h3>
                        <hr/>
                        <br/>
                        Lorem ipsum dolordeserunt illum, laudantium tempora delectus cupiditate error.
                        <br/>
                        <br/>
                        <br/>
                        <h3>Upcoming</h3>
                        <hr/>
                        <br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste invenepudiandae deserunt illum, laudantium tempora delectus cupiditate error 
                        <br/>
                        <br/>
                        <br/>
                            <Button id="contactMe">Contact Me</Button>
                        
                    </Col>
                </Row>
            </Container>

        </>

    );

}

export default Home;