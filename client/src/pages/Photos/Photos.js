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
                          <Link to="/gallery"> <Image src="/images/pexels-vitaly-vlasov-1655817.jpg" alt="Hannah Ryen" className="photosPics"></Image></Link> 
                            </Col>
                            
                        </Row>
                        
                     

                    </Col>

                    <Col className="photoTitle">
                      
                        <h1>Performance</h1>
                        <Row>
                            <Col>
                           <Link to="/performance"><Image src="/images/pexels-cottonbro-4722583.jpg" alt="Hannah Ryen" className="photosPics"></Image></Link> 
                            </Col>
                            
                        </Row>
                       
</Col>
                </Row>
                    

            </Container>
        </>

    )
}

export default Photos;