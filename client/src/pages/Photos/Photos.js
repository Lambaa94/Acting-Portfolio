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
                          <Link to="/gallery"> <Image src="images/566D3108-7EF6-472E-AA0D-71E030C50339.JPG" alt="Hannah Ryen" className="photosPics"></Image></Link> 
                            </Col>
                            
                        </Row>
                        
                     

                    </Col>

                    <Col className="photoTitle">
                      
                        <h1>Performance</h1>
                        <Row>
                            <Col>
                           <Link to="/performance"><Image src="/images/img_4368.jpeg" alt="Hannah Ryen" className="photosPics"></Image></Link> 
                            </Col>
                            
                        </Row>
                       
</Col>
                </Row>
                    

            </Container>
        </>

    )
}

export default Photos;