import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Photos.css";


function Photos() {

    return (
        <>
            <br />


            <Container>
                        
                <Row>
                    <Col className="photoTitle">
                        <h1>Gallery</h1>
                        <Row>
                            <Col>
                          <Link to="/gallery"> <Image src="/images/img_4368.jpeg" alt="Hannah Ryen" className="allPics"></Image></Link> 
                            </Col>
                            
                        </Row>
                        
                     

                    </Col>

                    <Col className="photoTitle">
                      
                        <h1>Performance</h1>
                        <Row>
                            <Col>
                           <Link to="/performance"><Image src="/images/img_4368.jpeg" alt="Hannah Ryen" className="allPics"></Image></Link> 
                            </Col>
                            
                        </Row>
                       
</Col>
                </Row>
                    

            </Container>
        </>

    )
}

export default Photos;