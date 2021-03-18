import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Photos.css";


function Photos() {

    return (
        <>
            <br />


            <Container className="photosSetUp1">
                        
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


            <Container className="photosSetUp2">
                        
                <Row>
                    <Col className="photoTitle2">
                        <h1>Gallery</h1>
                        <Row>
                            <Col>
                          <Link to="/gallery"> <Image src="/images/pexels-vitaly-vlasov-1655817.jpg" alt="Hannah Ryen" className="photosPics2"></Image></Link> 
                            </Col>
                            
                        </Row>
                        
                     

                    </Col>
</Row>
<Row>
                    <Col className="photoTitle2">
                      
                        <h1>Performance</h1>
                        <Row>
                            <Col>
                           <Link to="/performance"><Image src="/images/pexels-cottonbro-4722583.jpg" alt="Hannah Ryen" className="photosPics2"></Image></Link> 
                            </Col>
                            
                        </Row>
                       
</Col>
                </Row>
                    

            </Container>
        </>

    )
}

export default Photos;