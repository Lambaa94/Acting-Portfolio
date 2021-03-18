import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";



function Home() {

    return (

        <>
            <br />
            <Container className="setUp1">
                <Row>
                    <Col>
                    <div>
                        <Image src="Acting-Portfolio/public/images/img4368.jpeg" alt="Hannah Ryen" id="homePic" style={{ boxShadow: "rgb(227, 219, 219) 0px 2px 2px 2px"}}></Image>
                    </div>
                    </Col>
                    <Col >
                    <div>
                    <Jumbotron id="homeJumbo" style={{ boxShadow: "rgb(227, 219, 219) 0px 2px 2px 2px"}}>
                        <h3>Recent Roles</h3>
                        <hr />
                        <br />
                        Lorem ipsum dolordeserunt illum, laudantium tempora delectus cupiditate error.
                        <br />
                        <br />
                        <br />
                        <h3>Upcoming</h3>
                        <hr />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste invenepudiandae deserunt illum, laudantium tempora delectus cupiditate error
                        <br />
                        <br />
                       
                        <br /><Row>
                            <Col>
                            <Link to="/contact">
                                <Button id="contactMe">Contact Me</Button></Link>

                            </Col>
                            <Col>
                                <span><i class="fab fa-3x fa-instagram"></i></span>{" "}<span><i class="fab fa-3x fa-youtube m-2"></i></span>{" "}<span><i class="fab fa-3x fa-twitter-square"></i></span>
                            </Col>
                        </Row>
                    </Jumbotron>
                    </div>
                    </Col> 
                </Row>
            </Container>

            <Container className="setUp2">
                <Row >
                    
                    
                    <Col>
                    <Image src="/images/img_4368.jpeg" alt="Hannah Ryen" id="homePic2" style={{ boxShadow: "rgb(227, 219, 219) 0px 2px 2px 2px"}}></Image>
                    </Col>
                    
                    </Row>
                    <br/>
                    <Row>
                    <Col>
                    <Jumbotron id="homeJumbo2" style={{ boxShadow: "rgb(227, 219, 219) 0px 2px 2px 2px"}}>
                       
                    
                        
                   
                        <h3>Recent Roles</h3>
                        <hr />
                        <br />
                        Lorem ipsum dolordeserunt illum, laudantium tempora delectus cupiditate error.
                        <br />
                        <br />
                        <br />
                        <h3>Upcoming</h3>
                        <hr />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste invenepudiandae deserunt illum, laudantium tempora delectus cupiditate error
                        <br />
                        <br />
                       
                        <br />
                        
                        <Row>
                            <Col>
                            <Link to="/contact">
                                <Button id="contactMe">Contact Me</Button></Link>

                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                                <span><i class="fab fa-3x fa-instagram"></i></span>{" "}<span><i class="fab fa-3x fa-youtube m-2"></i></span>{" "}<span><i class="fab fa-3x fa-twitter-square"></i></span>
                            </Col>
                            </Row>
                        
                    </Jumbotron>
                    </Col>
                 
                    </Row>
               
            </Container>

        </>

    );

}

export default Home;